import React from 'react';

class ShippingInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  render() {
    return (
      <div className="row">
        <h2>Shipping Address</h2>
        <form id='form' onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="formGroup">
            <label htmlFor='address1'>Address Line 1</label>
            <input
              type='text'
              className='formControl'
              id='address1'
              placeholder='Street Address'
              value={this.state.addressLine1}
            />
          </div>
          <div className="formGroup">
            <label htmlFor='address2'>Address Line 2</label>
            <input
              type='text'
              className='formControl'
              id='address2'
              placeholder='Street Address'
              value={this.state.addressLine2}
            />
          </div>
          <div className="formGroup">
            <label htmlFor='city'>City</label>
            <input
              type='text'
              className='formControl'
              id='city'
              placeholder='City'
              value={this.state.city}
            />
          </div>
          <div className="formGroup">
            <label htmlFor='zipcode'>Zip Code</label>
            <input
              type='text'
              className='formControl'
              id='zipcode'
              placeholder='Zip Code'
              value={this.state.zipcode}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ShippingInformation;
