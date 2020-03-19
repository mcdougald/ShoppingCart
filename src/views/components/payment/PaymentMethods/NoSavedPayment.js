import React from 'react';
import PropTypes from 'prop-types';

const NoSavedPayment = props => {
  return (
    <div className='no-saved-payments'>
      <h2>Saved Payment Methods</h2>
      <p>No payment methods saved</p>

    </div>
  );
};

NoSavedPayment.propTypes = {

};

export default NoSavedPayment;
