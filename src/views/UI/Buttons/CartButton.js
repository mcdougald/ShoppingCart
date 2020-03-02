import React from 'react';
import PropTypes from 'prop-types';

const CartButton = ({value, type, onClick}) => {
  return (
    <button
      className={`button cart__button--${type}`}
    >
      {value}
    </button>
  );
};

CartButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default CartButton;
