import React from 'react';
import Cart from '../../views/components/cart/Cart/Cart';

export default {
  title: 'Cart',
  component: Cart,
  excludeStories: /.*Data$/
};

export const defaultCartData = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    quantity: 1
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    quantity: 1
  }
];

const subtotal = 300 + (300 * 0.08);
const shipping = subtotal * 0.02;


export const emptyCartData = [

];

export const Default = () => <Cart items={defaultCartData}
                                   subtotal={subtotal}
                                   shipping={shipping} />;

export const Empty = () => <Cart items={emptyCartData} />;
