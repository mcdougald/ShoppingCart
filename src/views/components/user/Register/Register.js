import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Panel from '../../../UI/Panel/Panel';
import RegisterForm from '../RegisterForm/RegisterForm'

const iconPath = process.env.PUBLIC_URL + '/assets/icons/';

const registerImage = require('../../../../assets/images/register-account-icon.jpg');


class Register extends React.Component {

  render() {
    return (
      <div className='column'>
        <Panel panelName={'user'}>
          <h2>Register Account</h2>
          <img className='login-icon'
               src={`${iconPath}register-account-icon.jpg`}
               alt='Creating Account Icon'
               rel={'preload'}/>
          <RegisterForm />
        </Panel>
      </div>
    );
  }
}

export default connect()(Register);
