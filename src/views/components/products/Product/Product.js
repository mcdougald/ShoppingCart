import React from "react";
import PropTypes from "prop-types";
import Panel from "../../../UI/Panel/Panel";
import { connect } from "react-redux";
import { ProductButton } from '../../../UI/Buttons';
import { addToCart } from '../../../../state/ducks/cart/actions';


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
  // const handleClick = () => {
  //   if (isInCart) {
  //     removeFromCart(id);
  //   } else {
  //     addToCart(id);
  //   }
  // };

  const handleAddToCart = (event, productToCartItem) => {
    event.preventDefault();
    addToCart(productToCartItem);
  };

  return (
    <div className={"row"}>
        <Panel panelName={'product'}>
        <div className={'is-marginless columns'}>
          <div className={'product__identifiers is-paddingless is-3 is-narrow column rows'}>
            <div className={'product__title'}>
              <h3>{name}</h3>
            </div>
            <div className={'product__image is-marginless'}>
              <img className='is-centered' src={`${imagePath}${image}`} alt={'product'}/>
            </div>
          </div>
          <div className={' is-marginless column is-centered is-flex'}>
            <div className={'is-desktop is-flex'}>
              <div className={'product__description column is-paddingless'}>{description}</div>
              <div className={'is-paddingless is-3 column rows'}>
                <div className={'product__price'}>$ {price}</div>
                <div className='product__button--justify'><ProductButton
                  className={'is-inverted'}
                  value={'Add to Cart'}
                  onClick={( e ) => {
                    handleAddToCart(
                      e,
                      {
                        id,
                        name,
                        price,
                        image,
                        description
                      } );
                  }}
                >
                </ProductButton></div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
};

Product.displayName = "Product";

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(null, mapDispatchToProps)(Product);
