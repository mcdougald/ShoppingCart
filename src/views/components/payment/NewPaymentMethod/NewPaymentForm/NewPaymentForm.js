import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { validateNewPaymentForm } from '../../../../utils/validate';
import RenderPaymentInput from './RenderPaymentInput';
import PropTypes from 'prop-types';

const NewPaymentForm = props => {
  return (
    <form className='newPaymentForm is-centered' >
      <div className='field'>
        <Field
          classString='card-number-input-field'
          name='cardNumber'
          label={'Card Number '}
          component={RenderPaymentInput}
          type='text'
          placeholder='Card Number'
        />
      </div>
      <div className='field'>
        <Field
          classString='card-name-input-field'
          name='cardName'
          component={RenderPaymentInput}
          type='text'
          placeholder='Full Name'
          label='Name on card'
        />
      </div>
      <div className='field'>
        <Field
          classString='valid-date-input-field'
          name='cardValidDate'
          component={RenderPaymentInput}
          type='text'
          placeholder='MM/YY'
          label='Valid Through'
        />
      </div>
      <div className='field'>
        <Field
          classString='cvv-input-field'
          name='cardCVV'
          component={RenderPaymentInput}
          type='password'
          placeholder='CVV'
          label='CVV / CVC      '
        />
      </div>
    </form>
  );
};

NewPaymentForm.propTypes = {
  pristine: PropTypes.bool, // added by redux-form
  valid: PropTypes.bool, // added by redux-form
  handleSubmit: PropTypes.func, // added by redux-form
  submitting: PropTypes.bool, // added by redux-form
};

export default reduxForm({
  form: 'newPaymentForm',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate: validateNewPaymentForm
})(NewPaymentForm);
