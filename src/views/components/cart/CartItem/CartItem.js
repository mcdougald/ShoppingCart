import React from 'react';
import PropTypes from 'prop-types';
import CartItemButton from '../../../UI/Buttons/CartItemButton';

const CartItem = ({ id, name, price, quantity, onClick }) => {
  return (
    <div className={'row'}>
      <div className={'cart-item'}>
        <h3>{name}</h3>
        <p>{quantity}</p>
        <p>{price}</p>
        <CartItemButton value={'Remove'} />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CartItem;
