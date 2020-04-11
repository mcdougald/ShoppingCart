import React from 'react';
import { useDispatch } from "react-redux"
import PropTypes from 'prop-types';

import { productsOperations } from '../../../state/ducks/products/';


const SearchBar = ({ searchValue }) => {
  const dispatch = useDispatch();


  return (
    <div className='control has-icons-right'>
      <input
        className='input search-bar__input'
        type="search"
        placeholder="Search Products..."
        value={searchValue}
        onChange={(e) => dispatch(productsOperations.filterProductsByName(e.target.value))}
      />
      <span className="icon is-large is-right search-icon" key={Math.random()}>
            <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string,
};

export default SearchBar;
