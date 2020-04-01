export const allProducts = [
  {
    id: 'prod-1-purple',
    name: 'Product 1 Purple',
    price: 100,
    image: 'purple-product-1.svg',
    description: 'This is the first purple product component I\'m working on making'
  },
  {
    id: 'prod-2-purple',
    name: 'Product 2 Purple',
    price: 200,
    image: 'purple-product-2.svg',
    description: 'This is the second purple product component I\'m working on making'
  },
  {
    id: 'prod-3-purple',
    name: 'Product 3 Purple',
    price: 300,
    image: 'purple-product-3.svg',
    description: 'This is the third purple product component I\'m working on making'
  },
  {
    id: 'prod-4-purple',
    name: 'Product 4 Purple',
    price: 400,
    image: 'purple-product-4.svg',
    description: 'This is the forth purple product component I\'m working on making'
  },
  {
    id: 'prod-5-purple',
    name: 'Product 5 Purple',
    price: 500,
    image: 'purple-product-5.svg',
    description: 'This is the fifth purple product component I\'m working on making'
  },
  {
    id: 'prod-6-purple',
    name: 'Product 6 Purple',
    price: 600,
    image: 'purple-product-6.svg',
    description: 'This is the sixth purple product component I\'m working on making'
  },
  {
    id: 'prod-7-purple',
    name: 'Product 7 Purple',
    price: 700,
    image: 'purple-product-7.svg',
    description: 'This is the seventh purple product component I\'m working on making'
  },
  {
    id: 'prod-8-purple',
    name: 'Product 8 Purple',
    price: 800,
    image: 'purple-product-8.svg',
    description: 'This is the eighth purple product component I\'m working on making'
  },
  {
    id: 'prod-9-purple',
    name: 'Product 9 Purple',
    price: 900,
    image: 'purple-product-9.svg',
    description: 'This is the ninth purple product component I\'m working on making'
  },
  {
    id: 'prod-10-purple',
    name: 'Product 10 Purple',
    price: 1000,
    image: 'purple-product-10.svg',
    description: 'This is the tenth purple product component I\'m working on making'
  },
  {
    id: 'prod-11-purple',
    name: 'Product 11 Purple',
    price: 1100,
    image: 'purple-product-11.svg',
    description: 'This is the eleventh purple product component I\'m working on making'
  },
  {
    id: 'prod-1-red',
    name: 'Product 1 Red',
    price: 150,
    image: 'red-product-1.svg',
    description: 'This is the first red product component I\'m working on making'
  },
  {
    id: 'prod-2-red',
    name: 'Product 2 Red',
    price: 250,
    image: 'red-product-2.svg',
    description: 'This is the second red product component I\'m working on making'
  },
  {
    id: 'prod-3-red',
    name: 'Product 3 Red',
    price: 350,
    image: 'red-product-3.svg',
    description: 'This is the third red product component I\'m working on making'
  },
  {
    id: 'prod-4-red',
    name: 'Product 4 Red',
    price: 450,
    image: 'red-product-4.svg',
    description: 'This is the fourth red product component I\'m working on making'
  },
  {
    id: 'prod-5-red',
    name: 'Product 5 Red',
    price: 550,
    image: 'red-product-5.svg',
    description: 'This is the fifth red product component I\'m working on making'
  },
  {
    id: 'prod-6-red',
    name: 'Product 6 Red',
    price: 650,
    image: 'red-product-6.svg',
    description: 'This is the sixth red product component I\'m working on making'
  },
  {
    id: 'prod-7-red',
    name: 'Product 7 Red',
    price: 750,
    image: 'red-product-7.svg',
    description: 'This is the seventh red product component I\'m working on making'
  },
  {
    id: 'prod-8-red',
    name: 'Product 8 Red',
    price: 850,
    image: 'red-product-8.svg',
    description: 'This is the eighth red product component I\'m working on making'
  },
  {
    id: 'prod-9-red',
    name: 'Product 9 Red',
    price: 950,
    image: 'red-product-9.svg',
    description: 'This is the ninth red product component I\'m working on making'
  },
  {
    id: 'prod-10-red',
    name: 'Product 10 Red',
    price: 1050,
    image: 'red-product-10.svg',
    description: 'This is the tenth red product component I\'m working on making'
  },
  {
    id: 'prod-11-red',
    name: 'Product 11 Red',
    price: 1150,
    image: 'red-product-11.svg',
    description: 'This is the eleventh red product component I\'m working on making'
  },
];

export const searchProductsByName = (products, searchValue) => {
  return products.filter( (product) => product.name.toLowerCase()
    .includes(searchValue.toLowerCase()) );
};
