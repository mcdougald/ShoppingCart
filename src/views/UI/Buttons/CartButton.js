import React from 'react';
import PropTypes from 'prop-types';

const CartButton = ({value, type, onClick}) => {
  return (
    <button
      className={`button is-primary cart__button--${type}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

CartButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default CartButton;
