// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.

// == Import npm
import React from 'react';

// == Import (style, data, components)
import './styles.scss';
import data from '../../data/currencies';
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
  constructor(props) {
    super(props); // j'exécute le constructeur de la class parent !
    this.state = { // une seul state ! toujouts un obj !
      opened: true,
      baseAmount: 1,
      selectedCurrency: 'United States Dollar',

    };
  }

  // ou ici this vaut le parent de la fonction et donc la class !
  // Alors qu'avant (dans index_old.js), this valait la fonction elle même...
  // Cette fois ci on est bon, plus besoin de binding !

  toggle = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }
  // je ne modifit JAMAIS mon state directement, toujours utilisé setState !
  // sinon React ne sera pa au courant

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

  myrate = () => data.find((item) => item.name === this.state.selectedCurrency);

  calculate = () => parseFloat((this.state.baseAmount * this.myrate().rate).toFixed(2), 10);
  //! attention, return un type string et attend un number dans le composant...

  render() {
    const { opened, baseAmount, selectedCurrency } = this.state;
    // je récupére ce qui se trouve dans mon state en destructurant !
    return (
      <div className="app">
        <Header baseAmount={baseAmount} onInputChange={this.changeBaseValue} />
        <Toggle toggle={this.toggle} open={opened} />
        { opened && <Currencies currenciesList={data} onClickChange={this.changeCurrencyValue} />}
        <Amount value={this.calculate()} currency={selectedCurrency} />
      </div>
    );
  }
}

// == Composant
/* const App = () => (
  <div className="app">
    <Header baseAmount={1} />
    <Currencies currenciesList={data} />
    <Amount value={1.09} currency="United States Dollard" />
  </div>
); */

// == Export
export default App;
