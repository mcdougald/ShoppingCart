import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ id, name, price, subtotal, quantity, onClick }) => {
  return (
      <React.Fragment>
        <td className={`has-text-centered cart-item__title productID-${id}`}>
          <div className='title'>
            {name}
          </div>
        </td>
        <td className={'has-text-centered cart-item__quantity'}>
          <p className='has-text-centered cart-cell-2'>
            {quantity}
          </p>
        </td>
        <td className={'has-text-centered cart-item__price'}>
          <p className='has-text-centered cart-cell-2'>$ {subtotal}
          </p>
        </td>
        <td className={'table__cell--delete'}>
          <div className='is-small'>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events */}
            <a
              role='button'
              className={'delete is-small cart-item__delete'}
              onClick={onClick}
              onKeyDown={onClick}
              tabIndex={0}
            >

            </a>
          </div>
        </td>
      </React.Fragment>

  )
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
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
