import React from 'react';
import PropTypes from 'prop-types';

const imagePath = './public/assets/images/';

const OrderRow = ({orderProduct}) => {
  return (
    <tr>
      <td>
        <img className='is-centered order__image'
             src={`${orderProduct.image}`}
             alt={'OrderItem'} />
      </td>
      <td>{orderProduct.name}</td>
      <td>{orderProduct.quantity}</td>
      <td>{orderProduct.description}</td>
      <td>{orderProduct.subtotal}</td>
    </tr>
  );
};

OrderRow.propTypes = {

};

export default OrderRow;
