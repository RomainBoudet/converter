import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Toggle = ({ open, toggle }) => {
  const cssClassName = open ? 'toggle toggle-open' : 'toggle';
  return (
    <button type="button" className={cssClassName} onClick={toggle}> v </button>
  );
};

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Toggle;

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
