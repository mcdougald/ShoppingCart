import React from 'react';
import PropTypes from 'prop-types';

const ProductButton = ({value, onClick}) => {
  return (
    <button
      className={'button is-small is-info product__button'}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

ProductButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ProductButton;
