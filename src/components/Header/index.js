import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ baseAmount, onInputChange }) => (
  <div className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">
      <input
        type="number"
        defaultValue={baseAmount}
        onChange={(evt) => {
          // je récupére ce qui a été tapé dans l'input, au changement, via evt.target.value
          // Je passe cette nouvelle valeur a ma fonction recu dans mes proposal
          // pour que le state du composant parent soit mis a jour
          const newValue = parseInt(evt.target.value, 10);
          onInputChange(newValue);
        }}
      />
      {baseAmount > 1 ? 'euros' : 'euro'}
    </p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Header;
