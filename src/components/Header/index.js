import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ baseAmount }) => (
  <div className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">{baseAmount} euro</p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;

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
