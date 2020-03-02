import React from 'react';
import PropTypes from 'prop-types';
import CartItemButton from '../../../UI/Buttons/CartItemButton';

const CartItem = ({ id, name, price, quantity, onClick }) => {
  return (
      <React.Fragment>
        <td className={`has-text-centered id-data-${id}`}>
          <div className='title'>
            {name}
          </div>
        </td>
        <td className={'has-text-centered'}>
          <div className='is-centered'>
            {quantity}
          </div>
        </td>
        <td className={'has-text-centered'}>$ {price}</td>
        <td className={'table__cell--delete'}>
          <div className='is-small'>
            <a className={'delete is-small cart-item__delete'}></a>
          </div>
        </td>
      </React.Fragment>

  )
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CartItem;

// {/*// <div className={'cart-item'}>*/}
// {/*//   <div className={'columns'}>*/}
// {/*//     <div className={'column cart-item__title'}>*/}
// {/*//       <h3 className={'title'}>{name}</h3>*/}
// {/*//     </div>*/}
// {/*//     <p className={'column'}>{quantity}</p>*/}
// {/*//     <div className={'column'}>*/}
// {/*//       <div className={'columns is-inline-flex cart-item__price'}>*/}
// {/*//         <p className='column is-bold'>{price}</p>*/}
// {/*//         /!*<CartItemButton value={'Remove'}/>*!/*/}
// {/*//         <div className='column is-danger is-small'>*/}
// {/*//           <a className={'delete is-small cart-item__delete'}></a>*/}
// {/*//         </div>*/}
// {/*//       </div>*/}
// {/*//     </div>*/}
// {/*//   </div>*/}
// {/*// </div>*/}
