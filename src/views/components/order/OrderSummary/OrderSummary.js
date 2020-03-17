import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../UI/Panel/Panel';
import OrderTableBody from './OrderTableBody';
import OrderSummaryButton from '../../../UI/Buttons/OrderSummaryButton';

const OrderSummary = ({orderProducts}) => {
  return (
    <div className='column'>
      <div className='order-summary'>
        <Panel panelName='order-summary'>
          <h2 className='title'>Your Order</h2>
          <OrderTableBody orderProducts={orderProducts}/>
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
