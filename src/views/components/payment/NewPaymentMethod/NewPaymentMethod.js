import React from 'react';
import PropTypes from 'prop-types';
import NewPaymentForm from './NewPaymentForm';

const NewPaymentMethod = props => {
  return (
    <div className='new-payment-method'>
      <p>Save this payment method for additional purchases? Yes / No</p>
      <NewPaymentForm />
    </div>
  );
};

NewPaymentMethod.propTypes = {

};

export default NewPaymentMethod;
