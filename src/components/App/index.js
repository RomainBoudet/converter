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

// == Composant
const App = () => (
  <div className="app">
    <Header baseAmount={1} />
    <Currencies currenciesList={data} />
    <Amount value={1.09} currency="United States Dollard" />
  </div>
);

// == Export
export default App;
