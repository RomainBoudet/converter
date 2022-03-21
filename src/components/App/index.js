// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import romLogo from './RB.png';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <img src={romLogo} alt="Romain Boudet logo" />
    <h1>Ho..., le beau front qu'ont va faire en REACT...</h1>
  </div>
);

// == Export
export default App;
