import React from 'react';
import PropTypes from 'prop-types';
import OrderRow from '../OrderRow';

const OrderTableBody = ({orderProducts}) => {
  let rows = [];

  orderProducts.map( (product) =>
    rows.push(<OrderRow orderProduct={product} key={`orderProduct-${product.name}`} />)
  );

  return (
    <table className='table order__table'>
      <thead>
      <tr>
        <th> </th>
        {/*<th> </th>*/}
        <th> </th>
        <th> </th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

OrderTableBody.propTypes = {

};

export default OrderTableBody;
