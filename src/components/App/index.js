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

// == Composant avec une class :
// Le constructor recois les props et je dois appeler le constructeur
// de ce que me fournit React avec Extend, via le mot clé "super", pour lui filer les props
// "super" permet d'exécuter le constructeur de la class parent...
// je dois passer les props à la class parent pour qu'elle fasse son job
// et pour ça, pas le choix, j'utilise le mot clé "super" pour passer les props.
// this.state est toujours un objet.

// eslint-disable-next-line react/prefer-stateless-function

//! Ici j'utilise un composant fait avec une class pour gérer le state et je n'utilise pas webpack
//! je dois donc bind a la main this !

class App extends React.Component {
  constructor(props) {
    super(props); // j'exécute le constructeur de la class parent !
    this.state = { // une seul state ! toujouts un obj !
      opened: true,
    };
    // this represente la méthode toggle dans la fonction toggle, et je dois changer çà
    // pour dire qu'en faite thhis représente la class et non la méthode Toggle !
    this.toggle = this.toggle.bind(this);
  }

  //! welcome to plugin-proposal_class_properties !
  // avec le plugin webpack (plugin-proposal_class_properties) on peut écrire la fonction comme ça :
  // toogle = () => {}
  // ce qui normalement est impossible dans une class...
  // ou ici this vaut le parent de la fonction et donc la class !
  // Alors qu'avant, this valait la fonction elle même...
  // Cette fois ci on est bon, plus besoin de binding !

  toggle() {
    console.log(this.state);
    this.setState({ // je ne modifit JAMAIS mon state directement !
      // sinon React ne sera pa au courant
      opened: !this.state.opened,
    });
  }

  render() {
    const { opened } = this.state;
    // je récupére ce qui se trouve dans mon state en destructurant !
    return (
      <div className="app">
        <Header baseAmount={1} />
        <button type="button" onClick={this.toggle}>
          Affichage currencies
        </button>
        { opened && <Currencies currenciesList={data} />}
        <Amount value={1.09} currency="United States Dollard" />
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
