import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../panel/Panel';
import CartItem from '../CartItem/CartItem';
import CartButton from '../../../UI/Buttons/CartButton';

const Cart = ({ items, subtotal = 0, shipping = 0, removeFromCart, checkout, clear}) => {
  const cartList = (
    <div className={'cart__items'}>
      <table className={'table has-text-centered'}>
        <thead>
          <tr className='center-table is-centered'>
            <th className={'has-text-centered'} >Product Name</th>
            <th className='center-table has-text-centered'>Quantity</th>
            <th className='center-table'>Price</th>
          </tr>
        </thead>
        <tbody>
        {items.map( item => (
          <tr key={Math.random()} className={'cart-item'}>
            <CartItem {...item} onClick={() => removeFromCart()}/>
          </tr>
        ) )}
        </tbody>
      </table>
    </div>
  );

  const emptyCartList = (
    <div className={'cart__items--empty alert'}>
      Cart is empty! Add a product from our list to your cart and then you can checkout
    </div>
  );

  return (
    <div className={'cart'}>
      <Panel panelName={'cart'}>
        <h3 className={'title'}>Cart</h3>
        <div className={'cart__body'}>
          { items.length > 0 && cartList }
          { items.length === 0 && emptyCartList }
        </div>
        <div className='cart__prices'>
          <div className={'cart__subtotal'}>
            Subtotal: <b>${subtotal}</b>
          </div>
          <div className={'cart__shipping'}>
            Shipping Cost: <b>${shipping}</b>
          </div>
          <div className={'cart__total'}>
            Total: <b>${subtotal + shipping}</b>
          </div>
        </div>
        <div className={'buttons are-small cart__buttons'}>
          <CartButton type={'checkout'}
                      value={'Checkout'}
          />
          <CartButton type={'clear'}
                      value={'Clear'}
          />
        </div>
      </Panel>
    </div>
  );
};

Cart.propTypes = {

};

export default Cart;
