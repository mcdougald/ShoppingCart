import React from 'react';
import PropTypes from 'prop-types';

const imagePath = process.env.PUBLIC_URL + "/assets/images/";

const OrderRow = ({orderProduct}) => {
  return (
    <tr>
      <td className='column-1__image'>
        <img className='is-centered order-product__image'
             src={`${imagePath}${orderProduct.image}`}
             alt={'OrderItem'} />
      </td>
      <td className='column-2'>
        <div className='order-product__name'>
          {orderProduct.name}
        </div>
        <div className='order-product__quantity'>
          <i>x</i><span className='order-quantity-text'>{orderProduct.quantity}</span>
        </div>
      </td>
      {/*<td className='column-3__quantity'>{orderProduct.quantity}</td>*/}
      <td className='column-4__description'>{orderProduct.description}</td>
      <td className='column-5__total'>${orderProduct.subtotal}</td>
    </tr>
  );
};

OrderRow.propTypes = {

};

export default OrderRow;
