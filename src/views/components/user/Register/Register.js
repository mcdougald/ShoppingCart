import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import PropTypes from "prop-types";

import Panel from '../../../UI/Panel/Panel';
import RegisterForm from '../RegisterForm/RegisterForm'

import {ReactComponent as RegisterAccIcon} from '../../../../../src/assets/images/register-account-icon.svg'


class Register extends React.Component {

  render() {
    if(this.props.isAuthenticated)
      return <Redirect to={`/user:${this.props.userID}`} />;

    return (
      <div className='column'>
        <Panel panelName={'user'}>
          <h2>Register Account</h2>
          <RegisterAccIcon className='register-icon'/>
          {/*<img className='register-icon'*/}
          {/*     src={`${iconPath}register-account-icon.jpg`}*/}
          {/*     alt='Creating Account Icon'*/}
          {/*     rel={'preload'}/>*/}
          <RegisterForm />
        </Panel>
      </div>
    );
  }
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  userID: PropTypes.string,
};

const mapStateToProps = (state) => ({
  userID: state.user.id,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Register);
