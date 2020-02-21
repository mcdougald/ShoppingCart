import React from "react";
import { Field, reduxForm } from 'redux-form';
import Input from '../../UI/input/Input';

const LoginForm = props => {

  const { handleSubmit } = props;

  return (
    <form className='loginForm is-centered' onSubmit={handleSubmit} >
      <div className='field-group make-center'>
        <div className='field'>
          <Field
            className='control field-element__input-field'
            name='username'
            component='input'
            type='text'
            placeholder='Username'
          />
        </div>
        <div className='field'>
          <Field
            className='control field-element__input-field'
            name='password'
            component='input'
            type='text'
            placeholder='Password'
          />
        </div>
      </div>
      <div className='button-group'>
        <button
          className='button make-center is-small' type='submit'>Login
        </button>
        <p><a href='/'>Forgot username or password</a></p>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'login'
})(LoginForm)
