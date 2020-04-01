import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as LoginAccIcon } from '../../../../../src/assets/images/login-account-icon.svg';

import Panel from '../../../UI/Panel/Panel';

import LoginForm from '../LoginForm/LoginForm';


const Login = ( props ) => {
  if (props.isAuthenticated) {
    return <Redirect to={`/user:${props.userID}`}/>;
  }


  return (
    <div className='column'>
      <Panel panelName={'user'}>
        <h2>Login</h2>
        <LoginAccIcon className='login-icon'/>
        {/*<img className='login-icon'*/}
        {/*     src={loginAccountIcon}*/}
        {/*     alt='Login Icon' />*/}
        <LoginForm/>
      </Panel>
    </div>
  );
};


Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userID: PropTypes.number.isRequired
};

// export default Login;

const mapStateToProps = (state) => ({
  userID: state.user.id,
  isAuthenticated: state.user.isAuthenticated
});


export default connect(mapStateToProps)(Login);
// const mapDispatchToProps = {
//   login
// };
//
// const withConnect = connect(
//   null,
//   mapDispatchToProps
// );
//
// const withForm = reduxForm({
//   form: "LoginForm",
//   destroyOnUnmount: true,
//   forceUnregisterOnUnmount: true,
//   initialValues: {
//     username: localStorage.getItem("username")
//   },
//   onSubmit: login
// });
//
//
// const enhance = compose(
//   withConnect,
//   withForm
// );
//
// export default enhance(Login);
