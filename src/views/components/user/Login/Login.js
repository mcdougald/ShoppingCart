import React from "react";
import PropTypes from "prop-types";

import Panel from '../../panel/Panel';

import LoginForm from '../LoginForm/LoginForm';

const loginImage = require('../../../../assets/images/login-account-icon.jpg');

class Login extends React.Component {

  render() {
    return (
      <div className='column'>
        <Panel panelName={'user'}>
          <h2>Login</h2>
          <img className='login-icon'
               src={loginImage}
               alt='Login Icon' />
          <LoginForm />
        </Panel>
      </div>
    );
  }
}

export default Login;
