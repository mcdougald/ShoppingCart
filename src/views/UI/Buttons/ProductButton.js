import React from 'react';
import PropTypes from 'prop-types';

const ProductButton = ({value, onClick}) => {
  return (
    <button
      className={'button is-small product__button'}
    >
      {value}
    </button>
  );
};

ProductButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default ProductButton;
