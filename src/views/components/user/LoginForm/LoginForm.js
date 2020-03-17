import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, Form } from 'redux-form';

import { login } from '../../../../state/ducks/user/actions';
import { compose } from "redux";

import Input from '../../../UI/Input/Input';

const LoginForm = (props) => {
  const { handleSubmit, isSubmitting } = props;

  const onLogin = values => {
    props.login(values);

  };


  return (
    <form className='loginForm is-centered' onSubmit={handleSubmit(onLogin)} >
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
            type='password'
            placeholder='Password'
          />
        </div>
      </div>
      <div className='button-group'>
        <button
          className='button make-center is-paddingless' type='submit'>Login
        </button>
        <p><a href='/'>Forgot username or password</a></p>
      </div>
    </form>
  )
};

// export default reduxForm({
//   form: 'login'
// })(LoginForm)
// export default LoginForm;

const mapStateToProps = state => {
  return {
    user: state.form['LoginForm']
    ? state.form['LoginForm'].values
      : undefined
  };

};

const mapDispatchToProps = {
  login
};

const withConnect = connect(
  null,
  mapDispatchToProps
);

const withForm = reduxForm({
  form: "LoginForm",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  initialValues: {
    username: localStorage.getItem("username")
  },
  onSubmit: login
});


const enhance = compose(
  withConnect,
  withForm
);

export default enhance(LoginForm);
