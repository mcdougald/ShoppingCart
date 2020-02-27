import React from "react";
import { Field, reduxForm } from 'redux-form/';
import { validateRegisterForm } from '../../../utils/validate';

// minlength = 5, required is true, password: min-len = 8, new-password must be equal to

const renderTextField = ({ input, placeholder, type, className,
                       meta: { touched, error, warning } }) => (

                         <div className={'field has-icons-right is-block'}>
      {(touched && error) ?
        <p className={'control has-icons-right'}>
          <input
          className={'Input is-invalid ' + className} {...input} placeholder={placeholder}
          type={type} />
          <span className="icon is-right is-invalid-icon" key={Math.random()}>
            <i className="fas fa-exclamation is-invalid-icon"></i>
          </span>
        </p> : (touched) ?
          <p className={'control has-icons-right'}>
            <input
              className={'Input is-valid ' + className} {...input} placeholder={placeholder} type={type}
            />
            <span className="icon is-right is-valid-icon" key={Math.random()}>
            <i className="fas fa-check is-valid-icon"></i>
            </span>
          </p> :
          <input
            className={className} {...input} placeholder={placeholder} type={type}
          />
      }
      {touched && ((error && <p className='error'>{error}</p>) || (warning && <p>{warning}</p>))}
    </div>
);


const renderPasswordField = ({ input, placeholder, type, className,
                           meta: { touched, error, warning } }) => (

  <div className={'field has-icons-right is-block fix-size pass-field'}>
    {(touched && error) ?
      <p className={'control has-icons-right is-size-7 has-text-centered'}>
        <input
          className={'Input is-invalid ' + className} {...input} placeholder={placeholder}
          type={type} />
        <span className="icon is-right is-small is-size-6 is-invalid-icon" key={Math.random()}>
            <i className="fas fa-exclamation is-invalid-icon is-size-7"></i>
          </span>
      </p> : (touched) ?
        <p className={'control has-icons-right is-size-7 has-text-centered'}>
        <input
          className={'Input is-valid ' + className} {...input} placeholder={placeholder} type={type}
        />
          <span className="icon is-right is-small is-size-6 is-valid-icon" key={Math.random()}>
            <i className="fas fa-check is-valid-icon is-size-7"></i>
            </span>
        </p>:
        <p className={'control has-icons-right is-size-7 has-text-centered'}>
        <input
          className={className} {...input} placeholder={placeholder} type={type}
        /></p>
    }
    {touched && ((error && <p className='error'>{error}</p>) || (warning && <p>{warning}</p>))}
  </div>
);

const RegisterForm = props => {

  const { handleSubmit } = props;

  return (
    <form className='registerForm is-centered' onSubmit={handleSubmit} >
      <div className='field-group make-center is-three-quarters'>
        <div className='field has-text-centered'>
          <Field
            className='input field-element__input-field'
            name='username'
            component={renderTextField}
            type='text'
            placeholder='Pick a Username'
          />
        </div>
        <div className='field'>
          <Field
            className='control field-element__input-field'
            name='password'
            component={renderPasswordField}
            type='password'
            placeholder='Password'
          />
        </div>
        <div className='field'>
          <Field
            className='control field-element__input-field'
            name='retype_password'
            component={renderPasswordField}
            type='password'
            placeholder='Retype Password'
          />
        </div>
      </div>
      <div className='button-group'>
        <button
          className='button make-center is-small' type='submit'>Register
        </button>
        <p>Already have an account? Click <a href='/login'>here</a></p>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'register',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate: validateRegisterForm
})(RegisterForm)
