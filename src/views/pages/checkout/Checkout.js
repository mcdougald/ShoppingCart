import React from 'react';
import OrderPayment from '../../components/payment/OrderPayment';
import OrderSummary from '../../components/order/OrderSummary';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="columns">
        <OrderSummary/>
        <OrderPayment/>
      </div>
    </div>
  );
};

export { Checkout };
