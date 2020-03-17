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
      image: 'product-1.svg',
      description: 'This is the first product component I\'m working on making'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'product-2.svg',
      description: 'This is the second product component I\'m working on making'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      image: 'product-3.svg',
      description: 'This is the third product component I\'m working on making'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      image: 'product-4.svg',
      description: 'This is the forth product component I\'m working on making'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500,
      image: 'product-5.svg',
      description: 'This is the fifth product component I\'m working on making'
    },
    {
      id: 6,
      name: 'Product 6',
      price: 600,
      image: 'product-6.svg',
      description: 'This is the sixth product component I\'m working on making'
    },
    {
      id: 7,
      name: 'Product 7',
      price: 700,
      image: 'product-7.svg',
      description: 'This is the seventh product component I\'m working on making'
    },
    {
      id: 8,
      name: 'Product 8',
      price: 800,
      image: 'product-8.svg',
      description: 'This is the eighth product component I\'m working on making'
    },
    {
      id: 9,
      name: 'Product 9',
      price: 900,
      image: 'product-9.svg',
      description: 'This is the ninth product component I\'m working on making'
    },
    {
      id: 10,
      name: 'Product 10',
      price: 1000,
      image: 'product-10.svg',
      description: 'This is the tenth product component I\'m working on making'
    },
    {
      id: 11,
      name: 'Product 11',
      price: 1100,
      image: 'product-11.svg',
      description: 'This is the eleventh product component I\'m working on making'
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
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Shop };
