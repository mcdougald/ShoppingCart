import React from 'react';
import PropTypes from 'prop-types';

import './information.module.scss'

class UserInformationForm extends React.Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipcode: ''
    },
    submitted: false
  };

  handleChange = (event) => {
    // I need to use setState immutably
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user })
  };

  handleSubmit (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="form-container">
          <h2>Account Information</h2>
          <form id='form' onSubmit={this.handleSubmit.bind( this )} method="POST">
            <div className="formGroup">
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                className='formControl'
                id='firstName'
                placeholder='First Name'
                onChange={this.handleChange}
                // value={this.state.firstName}
              />
            </div>
            <div className="formGroup">
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                className='formControl'
                id='lastName'
                placeholder='Last Name'
                onChange={this.handleChange}
                // value={this.state.lastName}
              />
            </div>
            <div className="formGroup">
              <label htmlFor='phone'>Primary Phone</label>
              <input
                type='text'
                className='formControl'
                id='phone'
                placeholder='Primary Phone'
                onChange={this.handleChange}
                // value={this.state.phone}
              />
            </div>
            <div className="formGroup">
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className='formControl'
                id='email'
                placeholder='Email'
                onChange={this.handleChange}
                // value={this.state.email}
              />
            </div>
            <div className="formGroup">
              <label htmlFor='address1'>Address Line 1</label>
              <input
                type='text'
                className='formControl'
                id='address1'
                placeholder='Street Address'
                onChange={this.handleChange}
                // value={this.state.addressLine1}
              />
            </div>
            <div className="formGroup">
              <label htmlFor='address2'>Address Line 2</label>
              <input
                type='text'
                className='formControl'
                id='address2'
                placeholder='Street Address'
                onChange={this.handleChange}
                // value={this.state.addressLine2}
              />
            </div>
            <div className="formGroup">
              <label htmlFor='city'>City</label>
              <input
                type='text'
                className='formControl'
                id='city'
                placeholder='City'
                onChange={this.handleChange}
                // value={this.state.city}
              />
            </div>
            <div className="formGroup">
              <label htmlFor='zipcode'>Zip Code</label>
              <input
                type='text'
                className='formControl'
                id='zipcode'
                placeholder='Zip Code'
                onChange={this.handleChange}
                // value={this.state.zipcode}
              />
            </div>
          </form>
          <div className='btn__group'>
            <button
              className='btn btn__save'
              onClick={this.onSave}
            >
              Save
            </button>
            <button
              className='btn btn__reset'
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

UserInformationForm.propTypes = {

};



export default UserInformationForm;
