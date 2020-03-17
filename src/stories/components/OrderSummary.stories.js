import React from 'react';
import OrderSummary from '../../views/components/order/OrderSummary/OrderSummary';
import product1Image from '../../assets/images/product-1.svg';
import product2Image from '../../assets/images/product-2.svg';


export default {
  title: 'OrderSummary',
  component: OrderSummary,
  excludeStories: /.*Data$/
}

export const orderData = [
  {
    id: 'productID--1',
    name: 'Product One',
    price: 100,
    quantity: 3,
    subtotal: 300,
    image: product1Image,
    description: 'This is the first product component I\'m working on making'
  },
  {
    id: 'productID--2',
    name: 'Product Two',
    price: 200,
    quantity: 2,
    subtotal: 400,
    image: product2Image,
    description: 'This is the Second product component I\'m working on making'
  },

];

export const Default = () => <OrderSummary orderProducts={orderData}/>;
export const Empty = () => <OrderSummary />;
