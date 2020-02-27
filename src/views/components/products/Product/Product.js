import React from "react";
import PropTypes from "prop-types";
import Panel from "../../panel/Panel";
import ProductButton from '../../../UI/Buttons/ProductButton';

const imagePath = process.env.PUBLIC_URL + "/assets/images/";

const Product = ({
  id,
  name,
  price,
  image,
  description,
  addToCart,
  removeFromCart,
  isInCart
}) => {
  const handleClick = () => {
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className={"row"}>
      <div className={'column'}>
        <Panel panelName={'product'}>
        <div className={'is-marginless columns'}>
          <div className={'is-paddingless is-3 is-narrow column'}>
            <div className={'product__title'}>
              <h3>{name}</h3>
            </div>
            <div className={'product__image is-marginless'}>
              <img src={`${imagePath}${image}`} alt={'product'}/>
            </div>
          </div>
          <div className={' is-marginless column is-centered'}>
            <div className={'columns'}>
              <div className={'is-paddingless column'}>
                <div className={'product__description '}>{description}</div>
              </div>
              <div className={'is-paddingless column'}>
                <div className={'product__price'}>$ {price}</div>
                <ProductButton
                  className={'is-inverted'}
                  value={'Add to Cart'}>
                </ProductButton>
              </div>
            </div>
          </div>
        </div>
      </Panel>
      </div>
    </div>
  );
};

Product.displayName = "Product";

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default Product;
