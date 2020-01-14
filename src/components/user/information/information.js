import React from 'react';

class UserInformationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  handleNameChange = (event) => {
   const name = event.target.value;
   this.setState({ name })
  };

  render() {
    return (
      <div className="row">
        <h2>User Information Page</h2>
        <form id='form' onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="formGroup">
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              className='formControl'
              id='firstName'
              placeholder='First Name'
              ref = {input => this.firstName = input}
              value={this.state.firstName}
            />
          </div>
          <div className="formGroup">
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              className='formControl'
              id='lastName'
              placeholder='Last Name'
              value={this.state.lastName}
            />
          </div>
          <div className="formGroup">
            <label htmlFor='phone'>Primary Phone</label>
            <input
              type='text'
              className='formControl'
              id='phone'
              placeholder='Primary Phone'
              value={this.state.phone}
            />
          </div>
          <div className="formGroup">
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              className='formControl'
              id='email'
              placeholder='Email'
              value={this.state.email}
            />
          </div>
        </form>
      </div>
    );
  }


}



export { UserInformationForm };
