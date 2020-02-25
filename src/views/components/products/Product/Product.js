import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../panel/Panel';

const imagePath = process.env.PUBLIC_URL + '/assets/images/';


const Product = (props) => {
  const {
      id,
      name,
      price,
      image,
      description,
      addToCart,
      removeFromCart,
      isInCart
    } = props;

  const handleClick = () => {

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className={'row'}>
      <Panel panelName={'product'}>
        <div className={'product__title'} >
          <h3>{name}</h3>
        </div>
        <div className={'product__image'}>
          <img src={`${imagePath}${image}`} alt={'product'} />
        </div>
          <div className={'product__price'} >
            ${price}
          </div>
      </Panel>
    </div>
  );

};


Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};


export default Product;
