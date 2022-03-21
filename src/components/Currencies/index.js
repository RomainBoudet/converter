import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Currencies = ({ currenciesList }) => (
  <div className="currencies">
    <ul>
      {currenciesList.map((item) => (
        <li key={item.name} className="currency"> {item.name}</li>
      ))}
    </ul>
  </div>
);

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};
export default Currencies;

// exemple de propType : ou ingredients est un tableau d'objets passé a mon compasant
// avec 4 clé valeurs, ou je definis le type de chaque clés !
/* Ingredients.propTypes = {

  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}; */

/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
}; */
