import React from 'react';
import PropTypes from 'prop-types';

const OrderSummaryButton = ({value, type, onClick}) => {
  return (
    <button
      className={`button order__button--${type}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

OrderSummaryButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default OrderSummaryButton;
