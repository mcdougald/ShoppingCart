import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import Input from "../../../components/UI/input/Input";

import { LOCATION_OPTIONS } from "../../../config/locations";

import Panel from "../../../components/panel/Panel";

import "./Information.module.scss";

class UserInformationForm extends React.Component {
  state = {
    accountInformationForm: {
      firstName: {
        type: 'input',
        label: null,
        gridAreaLocation: '1 / 1 / span 1 / span 2',
        fieldConfig: {
          name: 'First Name',
          type: 'text',
          placeholder: 'First Name'
        },
        value: '',
        validity: {
          required: true,
          pattern: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        },
        valid: false,
        touched: false
      },
      lastName: {
        type: 'input',
        label: null,
        gridAreaLocation: '1 / 3 / span 1 / span 3',
        fieldConfig: {
          name: 'Last Name',
          type: 'text',
          placeholder: 'Last Name'
        },
        value: '',
        validity: {
          required: true,
          pattern: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        },
        valid: false,
        touched: false
      },
      phone: {
        type: 'input',
        label: null,
        gridAreaLocation: '2 / 1 / span 1 / span 2',
        fieldConfig: {
          name: 'Phone',
          type: 'tel',
          placeholder: 'Primary Phone'
        },
        value: '',
        validity: {
          required: true,
          pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
        },
        valid: false,
        touched: false
      },
      email: {
        type: 'input',
        gridAreaLocation: '2 / 3 / span 1 / span 3',
        label: null,
        fieldConfig: {
          name: 'Email',
          type: 'email',
          placeholder: 'Email'
        },
        value: '',
        validity: {
          required: true,
          pattern: /\S+@\S+\.\S+/
        },
        valid: false,
        touched: false
      },
      addressLine1: {
        type: 'input',
        label: 'Address Line 1:',
        gridAreaLocation: '3 / 1 / span 1 / span 5',
        fieldConfig: {
          name: 'Address 1',
          type: 'text',
          placeholder: 'Street Address'
        },
        value: '',
        validity: {
          required: true,
          pattern: /^\s*\S+(?:\s+\S+){2}/
        },
        valid: false,
        touched: false
      },
      addressLine2: {
        type: 'input',
        label: 'Address Line 2:',
        gridAreaLocation: '4 / 1 / span 1 / span 5',
        fieldConfig: {
          name: 'Address 2',
          type: 'text',
          placeholder: 'Apt, Suite, Bldg'
        },
        value: '',
        validity: {
          pattern: /^[a-zA-Z0-9\s,.'-]{3,}$/
        },
        valid: false,
        touched: false
      },
      city: {
        type: 'input',
        label: 'City:',
        gridAreaLocation: '5 / 1 / span 1 / span 2',
        fieldConfig: {
          name: 'City',
          type: 'text',
          placeholder: 'City'
        },
        value: '',
        validity: {
          required: true,
          pattern: /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
        },
        valid: false,
        touched: false
      },
      state: {
        type: 'select',
        label: 'State:',
        gridAreaLocation: '5 / 3 / span 1 / span 2',
        fieldConfig: {
          options: LOCATION_OPTIONS
        },
        value: '',
        validity: {
          required: true,
          pattern: /^[.]/
        },
        valid: false,
        touched: false
      },
      zipcode: {
        type: 'input',
        label: 'Zip Code:',
        gridAreaLocation: '5 / 5 / span 1 / span 1',
        fieldConfig: {
          name: 'Zip Code',
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: '',
        validity: {
          required: true,
          pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/
        },
        valid: false,
        touched: false
      }
    },
    submitted: false
  };

  checkValidity = (value, rules) => {
    let isValid = false;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = ( (value.trim() !== '') && rules.pattern.test(value) )
    } else {
      isValid = ( (value.trim() === '') || rules.pattern.test(value) )
    }
    return isValid;
  };

  // Each input element is updated as it's typed into
  handleChange = (event, id) => {
    // Copy the initial form state using spread operator
    const formCopy = {
      ...this.state.accountInformationForm
    };

    // Use the fieldElement.id passed into handler to get
    // the properties of the input element which is under focus.
    const formElement = {...formCopy[id]};
    // Change value property alone to event.target.value
    formElement.value = event.target.value;

    formElement.valid = this.checkValidity(formElement.value, formElement.validity);
    formElement.touched = true;
    // immutably update the state
    formCopy[id] = formElement;
    this.setState({ accountInformationForm: formCopy });
  };

  handleSelectChange = selectedOption => {
    const { user } = this.state;
    user["state"] = selectedOption;
    this.setState({ user });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const inputArray = [];
    for (const key in this.state.accountInformationForm) {
      inputArray.push({
        id: key,
        inputData: this.state.accountInformationForm[key]
      })
    }

    return (
      <div className='column is-variable' >
        <Panel panelName={'account-overview'}>
        <div className="form-container">
          <h2 className="weight-bold">Finish Registering!</h2>
          <form className='account-form' id="form" onSubmit={this.handleSubmit.bind( this )} method="POST">
            {inputArray.map( fieldElement => (
              <Input
                key={fieldElement.id}
                id={fieldElement.id}
                touched={fieldElement.inputData.touched}
                gridAreaLocation={fieldElement.inputData.gridAreaLocation}
                check={fieldElement.inputData.validity}
                valid={!fieldElement.inputData.valid}
                changed={( event ) => this.handleChange( event, fieldElement.id )}
                value={fieldElement.inputData.value}
                fieldConfig={fieldElement.inputData.fieldConfig}
                inputType={fieldElement.inputData.type}
                label={fieldElement.inputData.label}
              />
            ) )}
          </form>
          <div className="buttons is-grouped is-uppercase is-right form-container__col-3 btn-grp">
            <p className="control">
              <button disabled className="button is-medium is-marginless btn--save"
                      onClick={this.onSave}>
                SAVE
              </button>
            </p>
            <p className="control">
              <button className="button is-medium is-marginless btn--reset" onClick={this.onReset}>
                RESET
              </button>
            </p>
          </div>
        </div>
      </Panel></div>
    );
  }
}

UserInformationForm.propTypes = {};

export default UserInformationForm;
/*
              <div className="formGroup">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="formControl"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  // value={this.state.firstName}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="formControl"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  // value={this.state.lastName}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Primary Phone</label>
                <input
                  type="text"
                  className="formControl"
                  id="phone"
                  placeholder="Primary Phone"
                  onChange={this.handleChange}
                  // value={this.state.phone}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="formControl"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  // value={this.state.email}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="address1">Address Line 1</label>
                <input
                  type="text"
                  className="formControl"
                  id="address1"
                  placeholder="Street Address"
                  onChange={this.handleChange}
                  // value={this.state.addressLine1}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="address2">Address Line 2</label>
                <input
                  type="text"
                  className="formControl"
                  id="address2"
                  placeholder="Street Address"
                  onChange={this.handleChange}
                  // value={this.state.addressLine2}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="formControl"
                  id="city"
                  placeholder="City"
                  onChange={this.handleChange}
                  // value={this.state.city}
                />
              </div>

              <div className="formGroup">
                <Select
                  options={LOCATION_OPTIONS.map( state => ( {
                    ...state,
                    label: state.name,
                    value: state.abbreviation
                  } ) )}
                  className="state-select-container"
                  classNamePrefix="state-select"
                  value={this.state.state}
                  id="state"
                  placeholder="State"
                  onChange={this.handleSelectChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="text"
                  className="formControl"
                  id="zipcode"
                  placeholder="Zip Code"
                  onChange={this.handleChange}
                  // value={this.state.zipcode}
                />
              </div>
 */
