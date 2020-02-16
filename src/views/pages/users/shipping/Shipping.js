import React from 'react';
import { LOCATION_OPTIONS } from '../../../../config/locations';
import Input from '../../../components/UI/input/Input';

import Panel from "../../../components/panel/Panel";

class ShippingInformation extends React.Component {
  state = {
    shippingForm: {
      addressLine1: {
        type: 'input',
        label: 'Address Line 1:',
        gridAreaLocation: '1 / 1 / span 1 / span 5',
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
        gridAreaLocation: '2 / 1 / span 1 / span 5',
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
        gridAreaLocation: '3 / 1 / span 1 / span 2',
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
        gridAreaLocation: '3 / 3 / span 1 / span 2',
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
        gridAreaLocation: '3 / 5 / span 1 / span 1',
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
      ...this.state.shippingForm
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
    this.setState({ shippingForm: formCopy });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const inputArray = [];
    for (const key in this.state.shippingForm) {
      inputArray.push({
        id: key,
        inputData: this.state.shippingForm[key]
      })
    }

    return (
      <div className='column'><Panel panelName={'shipping'}>
        <div className="form-container">
          <h2 className='panel-headers'>Shipping Address</h2>
          <form className='shipping-form' onSubmit={this.handleSubmit.bind( this )} method="POST">
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
              <button className="button is-medium is-marginless btn--reset"
                      onClick={this.onReset}>
                RESET
              </button>
            </p>
          </div>
        </div>
      </Panel></div>
    );
  }
}

export default ShippingInformation;
