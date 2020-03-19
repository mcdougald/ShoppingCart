import React from 'react';
import PropTypes from 'prop-types';

const RenderPaymentInput = ( {input, classString, label, placeholder, type, meta: {touched, error, warning}}) => {

  let labelClassName='payment-form__label ';
  let inputClassName='payment-form__input ' + classString;
  if (touched && error) {
    labelClassName += ' payment-label-has-error';
    inputClassName += ' payment-input-has-error';
  }

  return (
    <div>
      <label className={labelClassName}>{label}</label>
      <input className={inputClassName} {...input} placeholder={placeholder} type={type} />
      <div>
        {touched && (error && <span className='payment-error-field'>{error}</span>)}
      </div>
    </div>
  );
};

RenderPaymentInput.propTypes = {

};

export default RenderPaymentInput;
