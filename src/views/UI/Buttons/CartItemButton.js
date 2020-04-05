import React from 'react';
import PropTypes from 'prop-types';

const CartItemButton = ({value, onClick}) => {
  return (
    <button
      className={'button is-small cart-item__button'}
    >
      {value}
    </button>
  );
};

CartItemButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default CartItemButton;
