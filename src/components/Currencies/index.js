import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Currencies = ({
  currenciesList, onClickChange, selectedCurrency, onFilterChange, filterText,
}) => (
  <div className="currencies">
    <div className="currencies-title">
      <input
        value={filterText}
        type="text"
        className="currencies-search"
        placeholder="Filtrer les devises..."
        onChange={(evt) => {
          const texteSaisi = evt.target.value;
          onFilterChange(texteSaisi);
        }}
      />
    </div>
    <ul>
      {currenciesList.map((item) => (
        <li
          key={item.name}
          className={item.name === selectedCurrency ? 'currency currency--active' : 'currency'}
          onClick={() => {
            onClickChange(item.name);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  onClickChange: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
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
