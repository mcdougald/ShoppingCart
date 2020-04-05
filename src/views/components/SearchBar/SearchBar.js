import React from 'react';
import { useDispatch } from "react-redux"
import PropTypes from 'prop-types';

import { productsOperations } from '../../../state/ducks/products/';


const SearchBar = ({ searchValue }) => {
  const dispatch = useDispatch();


  return (
    <div>
      <input
        className='input search-bar__input'
        type="search"
        placeholder="Search our Products"
        value={searchValue}
        onChange={(e) => dispatch(productsOperations.filterProductsByName(e.target.value))}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string,
};

export default SearchBar;
