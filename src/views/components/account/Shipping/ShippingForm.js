import React from "react";
import { Field, reduxForm } from "redux-form/";
import { LOCATION_OPTIONS } from "../../../utils/locations";
import PropTypes from "prop-types";
// import { validateRegisterForm } from "../../../utils/validate";
import AccountSaveButton from '../../../UI/Buttons/AccountSaveButton';
import AccountResetButton from '../../../UI/Buttons/AccountResetButton';

const ShippingForm = props => {
  const { handleSubmit } = props;

  return (
    <form className="accountShippingForm is-centered" onSubmit={handleSubmit}>
      <div className="field-group address-field-group">
        <div className="field">
          <label htmlFor="shipping-address-1" className='label is-medium'>Address Line 1</label>
          <p className="control column is-paddingless">
            <Field
              className="field-element__input-field input__address1 shipping-input"
              id='shipping-address-1'
              name="Address1"
              component="input"
              type="text"
              placeholder="Street Address"
            />
          </p>
          <label htmlFor='shipping-address-2' className='label is-medium'>Address Line 2</label>
          <p className="control column is-paddingless">
            <Field
              className="field-element__input-field input__address2 shipping-input"
              name="Address2"
              id='shipping-address-2'
              component="input"
              type="text"
              placeholder="Apt, Suite, Bldg"
            />
          </p>
        </div>
        <div className="field">
          <div className='column is-paddingless'>
            <label htmlFor='shipping-city' className='label is-medium'>City</label>
            <p className="control column is-paddingless">
              <Field
                className="field-element__input-field input__city shipping-input"
                name="City"
                id='shipping-city'
                component="input"
                type="text"
                placeholder="City"
              />
            </p></div>
          <div className='column is-paddingless'>
            <label htmlFor='shipping-state' className='label is-medium'>State</label>
            <p className="control column is-paddingless">
              <Field
                className="field-element__input-field select__state shipping-input"
                name="State"
                id='shipping-state'
                component="select"
              >
                <option value="" selected="selected">
                  State
                </option>
                {LOCATION_OPTIONS.map( option => (
                  <option
                    key={option.abbreviation}
                    value={option.name}
                    title={option.abbreviation}
                    data-descr={option.name}
                  >
                    {option.name}
                  </option>
                ) )}
              </Field>
            </p>
          </div>
          <div className='column is-paddingless'>
            <label htmlFor='shipping-zip-code' className='label is-medium'>Zip Code</label>
            <p className="control">
            <Field
              className="field-element__input-field input__zipcode shipping-input"
              name="ZipCode"
              component="input"
              id='shipping-zip-code'
              type="text"
              placeholder="Zip Code"
            />
          </p>
          </div>
        </div>
      </div>
      <div className="button-group">
        <AccountSaveButton value='Save' />
        <AccountResetButton value='Reset' />
      </div>
    </form>
  );
};

ShippingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "accountShippingForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(ShippingForm);
