import React from 'react';

import Panel from "../../../UI/Panel/Panel";
import ShippingForm from './ShippingForm';

class ShippingInformation extends React.Component {


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

  // Each Input element is updated as it's typed into
  handleChange = (event, id) => {
    // Copy the initial form state using spread operator
    const formCopy = {
      ...this.state.shippingForm
    };

    // Use the fieldElement.id passed into handler to get
    // the properties of the Input element which is under focus.
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
    return (
      <div className='column'>
        <Panel panelName={'shipping'}>
          <div className="form-container">
            <h2 className='panel-headers'>Shipping Address</h2>
            <ShippingForm />
          </div>
        </Panel>
      </div>
    );
  }
}

export default ShippingInformation;
