// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.

// == Import npm
import React from 'react';

// == Import (style, data, components)
import './styles.scss';
import data from '../../data/currencies'; // à mettre dans le state si ça change !
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toggle from '../Toggle';

// == Composant avec une class :
// Le constructor recois les props et je dois appeler le constructeur
// de ce que me fournit React avec Extend, via le mot clé "super", pour lui filer les props
// "super" permet d'exécuter le constructeur de la class parent...
// je dois passer les props à la class parent pour qu'elle fasse son job
// et pour ça, pas le choix, j'utilise le mot clé "super" pour passer les props.
// this.state est toujours un objet.

// eslint-disable-next-line react/prefer-stateless-function

//! Ici j'utilise webpack avec son plugin plugin-proposal_class_properties
//! qui me permet cette écriture en fat arrow, au lieu d'une méthode,
//! ce qui normalement est impossible ici

class App extends React.Component {
  // ou ici this vaut le parent de la fonction et donc la class !
  // Alors qu'avant (dans index_old.js), this valait la fonction elle même...
  // Cette fois ci on est bon, plus besoin de binding !
  state = { // une seul state ! toujouts un obj !
    opened: true,
    baseAmount: 1,
    selectedCurrency: 'United States Dollar',
    filter: '',

  }

  //! LIFECYCLE
  // a la fin du montage de mes composants, componentDidMount est appelé et le titre va changer !
  componentDidMount() {
    this.updatePageTitle();
    // Quand mon composant est affiché, j'écoute la touche echap,
    // si elle est préssé, je lance la méthode toggle
    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.toggle();
      }
    });
  }

  // a la mise a jour du composant, on vérifit que le titre de la page a bien la devise du state !
  componentDidUpdate() {
    this.updatePageTitle();
  }

  // Changement du titre de la page !
  updatePageTitle = () => {
    const { selectedCurrency } = this.state;
    document.title = `Euro -> ${selectedCurrency}`;
  }

  toggle = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  // je ne modifit JAMAIS mon state directement, TOUJOURS utiliser setState !
  // sinon React ne sera pa au courant

  //! NOTION D'INPUT CONTROLLÉ !
  // Ici je respecte la régle du Controlled Comoponent (ou de l'input controllé),
  // avec chaque changement dans un input fait par le user, qui est stocké dans le state !
  // Toujours de la même maniére : dans mon state, j'ai une méthode qui permet de mettre
  // a jour (via setState) la donnée de l'input dans une variable de mon state,
  // et je fait passer cette fonction via les props, à mon composant,
  // pour que lors de l'action (au click ou au changement...), mon composant éxécute
  // la fonction avec en paramétre la nouvelle valeur à mettre dans le state.
  // Et comme valeur de mon input (value), je met ce qui provient de mon state !
  changeBaseValue = (newValue) => {
    this.setState({
      baseAmount: newValue,
    });
  }

  changeCurrencyValue = (newValue) => {
    this.setState({
      selectedCurrency: newValue,
    });
  }

  handleFilterChange = (newValue) => {
    this.setState({
      filter: newValue,
    });
  }

  calculate = () => {
    const myrate = data.find((item) => item.name === this.state.selectedCurrency);
    const number = parseFloat((this.state.baseAmount * myrate.rate).toFixed(2), 10);
    return number;
  }
  //! attention, return un type string et attend un number dans le composant...

  // Je filtre la liste complète des devises en ne conservant
  // que celles dont le .name inclue le texte du filtre
  filteredCurrencies = () => (
    data.filter((item) => item.name.toLocaleLowerCase().includes(this.state.filter.toLowerCase()))
  )

  render() {
    const {
      opened, baseAmount, selectedCurrency, filter,
    } = this.state;

    return (
      <div className="app">
        <Header baseAmount={baseAmount} onInputChange={this.changeBaseValue} />
        <Toggle toggle={this.toggle} open={opened} />
        { opened && (
        <Currencies
          filterText={filter}
          currenciesList={this.filteredCurrencies()}
          onClickChange={this.changeCurrencyValue}
          selectedCurrency={selectedCurrency}
          onFilterChange={this.handleFilterChange}
        />
        )}
        <Amount value={this.calculate()} currency={selectedCurrency} />
      </div>
    );
  }
}

// == Export
export default App;
