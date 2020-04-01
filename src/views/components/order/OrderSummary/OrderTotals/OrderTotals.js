import React from 'react';
import PropTypes from 'prop-types';

const OrderTotals = ({subtotal = 0, tax = 0, shipping = 0, total = 0}) => {
  return (
    <div className="order-totals">
      <div>
        Subtotal: <span className='order-total-data'>${subtotal}</span>
      </div>
      <div>
        Tax: <span className='order-total-data'>${tax}</span>
      </div>
      <div>
        Shipping: <span className='order-total-data'>${shipping}</span>
      </div>
      <div className='order-total-cost'>
        Total Cost: <span className='order-total-data'>${total}</span>
      </div>

    </div>
  );
};

OrderTotals.displayName = 'OrderTotals';

OrderTotals.defaultProps = {
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0
};

OrderTotals.propTypes = {
  subtotal: PropTypes.number,
  tax: PropTypes.number,
  shipping: PropTypes.number,
  total: PropTypes.number
 };

export default OrderTotals;
