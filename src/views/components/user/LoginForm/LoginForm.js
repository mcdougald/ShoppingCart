import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../../../state/ducks/user/actions';

// Compose function allows writing out multiple HOC with a much better syntax.
// Better than manually chaining together with sets of ()()()
import { compose } from "redux";

const LoginForm = (props) => {

  const { handleSubmit } = props;

  const onLogin = values => {
    console.log(`Login Form Values: ${values}`);
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
          className='button make-center is-paddingless' type='submit'>
          Login
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func
};

// const mapStateToProps = state => {
//   return {
//     user: state.form['LoginForm']
//     ? state.form['LoginForm'].values
//       : undefined
//   };
//
// };

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

// List out the HOC for the Component, HOC are applied in series
const enhance = compose(
  withConnect,
  withForm
);

export default enhance(LoginForm);
