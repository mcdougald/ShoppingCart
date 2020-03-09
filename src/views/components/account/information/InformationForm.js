import React from "react";
import { Field, reduxForm } from "redux-form/";
import { LOCATION_OPTIONS } from "../../../utils/locations";
import PropTypes from "prop-types";
import { validateRegisterForm } from "../../../utils/validate";
import AccountSaveButton from '../../../UI/Buttons/AccountSaveButton';
import AccountResetButton from '../../../UI/Buttons/AccountResetButton';

const InformationForm = props => {
  const { handleSubmit, isSubmitting } = props;

  return (
    <form
      className="accountInformationForm is-centered"
      onSubmit={handleSubmit}
    >
      <div className="field-group contact-field-group">
        <div className="field">
          <p className="control column is-paddingless is-4">
            <Field
              className="field-element__input-field input__firstName"
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </p>
          {/*</div>*/}
          {/*<div className='field'>*/}
          <p className="control column is-paddingless">
            <Field
              className="field-element__input-field input__lastName"
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </p>
        </div>
        <div className="field">
          <p className="control column is-paddingless is-4">
            <Field
              className="field-element__input-field input__phone"
              name="phone"
              component="input"
              type="tel"
              placeholder="Primary Phone"
            />
          </p>
          {/*</div>*/}
          {/*<div className='field'>*/}
          <p className="control column is-paddingless">
            <Field
              className="field-element__input-field input__email"
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </p>
        </div>
      </div>
      <div className="field-group address-field-group">
        <div className="field">
          <p className="control column is-paddingless has-text-centered">
            <Field
              className="field-element__input-field input__address1"
              name="Address1"
              component="input"
              type="text"
              placeholder="Street Address"
            />
          </p>
        {/*</div>*/}
        {/*<div className="field">*/}
          <p className="control column is-paddingless has-text-centered">
            <Field
              className="field-element__input-field input__address2"
              name="Address2"
              component="input"
              type="text"
              placeholder="Apt, Suite, Bldg"
            />
          </p>
        </div>
        <div className="field">
          <p className="control column is-paddingless is-4">
            <Field
              className="control field-element__input-field input__city"
              name="City"
              component="input"
              type="text"
              placeholder="City"
            />
          </p>
        {/*</div>*/}
        {/*<div className="field">*/}
          <p className="control column is-paddingless is-6">
            <Field
              className="field-element__input-field select__state"
              name="State"
              component="select"
            >
              <option value="" selected="selected">
                State
              </option>
              {LOCATION_OPTIONS.map(option => (
                <option
                  key={option.abbreviation}
                  value={option.name}
                  title={option.abbreviation}
                  data-descr={option.name}
                >
                  {option.name}
                </option>
              ))}
            </Field>
          </p>
        {/*</div>*/}
        {/*<div className="field">*/}
          <p className="control column is-paddingless is-3">
            <Field
              className="control field-element__input-field input__zipcode"
              name="ZipCode"
              component="input"
              type="text"
              placeholder="Zip Code"
            />
          </p>
        </div>
      </div>
      <div className="button-group">
        <AccountSaveButton value='Save' />
        <AccountResetButton value='Reset' />
      </div>
    </form>
  );
};

InformationForm.propTypes = {};

export default reduxForm({
  form: "accountInformationForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(InformationForm);
