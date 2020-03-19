import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../UI/Panel/Panel';
import NoSavedPayment from '../PaymentMethods/NoSavedPayment';
import NewPaymentMethod from '../NewPaymentMethod';

const OrderPayment = props => {
  return (
    <div className='column'>
      <div className='order-payment'>
        <Panel panelName={'order-payment'}>
        <h2 className='order-payment__title'>Select Payment Method</h2>
        <NoSavedPayment />
        <p>+ use new card for payment</p>
        <NewPaymentMethod />
        <div className='payment-buttons'>
          <button className='use-card-button is-primary button'>Use Card</button>
          <button className='cancel-order-button is-primary button'>Cancel Order</button>
        </div>
      </Panel>
      </div>
    </div>
  );
};

OrderPayment.propTypes = {

};

export default OrderPayment;
