import React from 'react';
import ProductList from '../../components/products/ProductList/ProductList';
import Cart from '../../components/cart/Cart/Cart';


const Shop = () => {

  const defaultProductData = [
    {
      id: 1,
      name: 'Product 1 Purple',
      price: 100,
      image: 'purple-product-1.svg',
      description: 'This is the first purple product component I\'m working on making'
    },
    {
      id: 2,
      name: 'Product 2 Purple',
      price: 200,
      image: 'purple-product-2.svg',
      description: 'This is the second purple product component I\'m working on making'
    },
    {
      id: 3,
      name: 'Product 3 Purple',
      price: 300,
      image: 'purple-product-3.svg',
      description: 'This is the third purple product component I\'m working on making'
    },
    {
      id: 4,
      name: 'Product 4 Purple',
      price: 400,
      image: 'purple-product-4.svg',
      description: 'This is the forth purple product component I\'m working on making'
    },
    {
      id: 5,
      name: 'Product 5 Purple',
      price: 500,
      image: 'purple-product-5.svg',
      description: 'This is the fifth purple product component I\'m working on making'
    },
    {
      id: 6,
      name: 'Product 6 Purple',
      price: 600,
      image: 'purple-product-6.svg',
      description: 'This is the sixth purple product component I\'m working on making'
    },
    {
      id: 7,
      name: 'Product 7 Purple',
      price: 700,
      image: 'purple-product-7.svg',
      description: 'This is the seventh purple product component I\'m working on making'
    },
    {
      id: 8,
      name: 'Product 8 Purple',
      price: 800,
      image: 'purple-product-8.svg',
      description: 'This is the eighth purple product component I\'m working on making'
    },
    {
      id: 9,
      name: 'Product 9 Purple',
      price: 900,
      image: 'purple-product-9.svg',
      description: 'This is the ninth purple product component I\'m working on making'
    },
    {
      id: 10,
      name: 'Product 10 Purple',
      price: 1000,
      image: 'purple-product-10.svg',
      description: 'This is the tenth purple product component I\'m working on making'
    },
    {
      id: 11,
      name: 'Product 11 Purple',
      price: 1100,
      image: 'purple-product-11.svg',
      description: 'This is the eleventh purple product component I\'m working on making'
    }
  ];


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

export default Shop;
