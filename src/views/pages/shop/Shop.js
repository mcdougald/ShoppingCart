import React from 'react';
import ProductList from '../../components/products/ProductList/ProductList';
import Cart from '../../components/cart/Cart/Cart';


const Shop = () => {
  const defaultCartData = [
    // {
    //   id: 1,
    //   name: 'Product 1',
    //   price: 100,
    //   quantity: 1
    // },
    // {
    //   id: 2,
    //   name: 'Product 2',
    //   price: 200,
    //   quantity: 1
    // }
  ];

  const defaultProductData = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'product-1.jpg',
      description: 'This is the first product component I\'m working on making'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'product-2.jpg',
      description: 'This is the second product component I\'m working on making'
    }
  ];

  const subtotal = 300 + (300 * 0.08);
  const shipping = subtotal * 0.02;



  return (
    <div className="row">
      <h2 className='store-products__title'>
        Browse our Products!
      </h2>
      <div className="store columns">
        <div className='is-paddingless column'>
          <div className='store-products'>
            <ProductList products={defaultProductData} />
          </div>
        </div>
        <div className='column is-4'>
          <div className='store-cart'>
            <Cart items={defaultCartData}
                  subtotal={0}
                  shipping={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Shop };
