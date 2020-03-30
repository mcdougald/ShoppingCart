import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({searchTerm, handleChange}) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {

};

export default SearchBar;
