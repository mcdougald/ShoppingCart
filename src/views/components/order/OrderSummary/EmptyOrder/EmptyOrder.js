import React from 'react';
import PropTypes from 'prop-types';

const EmptyOrder = props => {
  return (
    <div className='order-is-empty'>
      <p>Add products to your cart to place an order</p>
    </div>
  );
};

EmptyOrder.propTypes = {

};

export default EmptyOrder;
