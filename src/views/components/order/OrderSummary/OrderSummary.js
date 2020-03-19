import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import Panel from '../../../UI/Panel/Panel';
import OrderTableBody from './OrderTableBody';
import OrderTotals from './OrderTotals';
import OrderSummaryButton from '../../../UI/Buttons/OrderSummaryButton';
import EmptyOrder from './EmptyOrder';

const OrderSummary = () => {

    const { order } = useSelector(state => ({
      order: state.cart
    }));

    const orderProducts = order.cartItems;

  return (
    <div className='column'>
      { console.log(order) }
      { console.log(`orderProducts Length: ${orderProducts.length}`) }
      <div className='order-summary'>
        <Panel panelName='order-summary'>
          <h2 className='title is-marginless'>Your Order</h2>
          {orderProducts.length > 0 && <OrderTableBody orderProducts={orderProducts}/>}
          {orderProducts.length > 0 && (
            <OrderTotals subtotal={order.cartSubtotal}
                         shipping={order.cartShipping}
                         tax={order.cartTaxes}
                         total={order.cartTotalCost}
            />
          )}
          {orderProducts.length === 0 && <EmptyOrder />}
        </Panel>
        <div className='buttons order__buttons'>
          <OrderSummaryButton type={'submit'} value={'Submit Order'}/>
          <OrderSummaryButton type={'return'} value={'Back to Products'}/>
        </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {

};

export default OrderSummary;
