import React from 'react';
import PropTypes from 'prop-types';

const CartItemButton = ({value, onClick}) => {
  return (
    <button
      className={'button cart-item__button'}
    >
      {value}
    </button>
  );
};

CartItemButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default CartItemButton;
