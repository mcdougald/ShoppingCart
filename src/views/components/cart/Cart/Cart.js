import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import Panel from '../../../UI/Panel/Panel';
import CartItem from '../CartItem/CartItem';

import { ReactComponent as EmptyCartIcon } from '../../../../assets/images/empty-shopping-cart-icon-2.svg'
import { CartButton } from '../../../UI/Buttons';

import { removeFromCart, emptyCart } from '../../../../state/ducks/cart/actions';


const Cart = () => {
  const cart  = useSelector(( { cart } ) => (cart));
  const dispatch = useDispatch();

  const handleEmptyCartButton = useCallback(
    () => dispatch(emptyCart()),
    [dispatch]
  );


  const cartList = (
    <React.Fragment>
      <div className={'cart__items'}>
        <table className={'table has-text-centered'}>
          <thead>
          <tr className='center-table is-centered'>
            <th className={'has-text-centered'}>Product Name</th>
            <th className='center-table has-text-centered'>Quantity</th>
            <th className='center-table'>Price</th>
          </tr>
          </thead>
          <tbody>
          {cart.cartItems.map( item => (
            <tr key={Math.random()} className={'cart-item'}>
              <CartItem {...item} onClick={() => dispatch(removeFromCart(item.id))}/>
            </tr>
            )
          )}
          </tbody>
        </table>
      </div>
      <div className='cart__prices'>
        <div className={'cart__subtotal'}>
          Subtotal: <b>${cart.cartSubtotal}</b>
        </div>
        <div className={'cart__shipping'}>
          Shipping Cost: <b>${cart.cartShipping}</b>
        </div>
        <div className={'cart__total'}>
          Total: <b>${cart.cartTotalCost}</b>
        </div>
      </div>
      <div className={'buttons are-small cart__buttons'}>
        <CartButton type={'checkout'}
                    value={'Checkout'}
        />
        <CartButton type={'clear'}
                    value={'Empty'}
                    onClick={handleEmptyCartButton}
        />
      </div>
    </React.Fragment>
  );

  const emptyCartList = (
    <div className={'cart__items--empty alert'}>
      <EmptyCartIcon className='empty-cart-icon'/>
      {/*<img className='empty-cart-icon'*/}
      {/*     src={`${iconPath}empty-shopping-cart-icon-2.svg`}*/}
      {/*     alt='Empty Cart Icon' />*/}
      <span className='is-size-4'>Your cart is empty!</span> <br />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <span className='is-size-6'>It looks like you haven't added any products to your cart yet.</span>
    </div>
  );

  return (
    <div className={'cart'}>
      {  console.log(cart) }
      <Panel panelName={'cart'}>
        <h3 className={'title'}>Cart</h3>
        <div className={'cart__body'}>
          { cart.cartItems.length > 0 && cartList }
          { cart.cartItems.length === 0 && emptyCartList }
        </div>
      </Panel>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object
};

// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems,
//   cartSubtotal: state.cart.cartSubtotal
// });
//
// const mapDispatchToProps = {
//   removeFromCart
// };

//
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
export default Cart;
