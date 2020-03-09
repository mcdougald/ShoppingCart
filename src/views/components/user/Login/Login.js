import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form/immutable';
import PropTypes from "prop-types";

import Panel from '../../../UI/Panel/Panel';

import LoginForm from '../LoginForm/LoginForm';
import { login } from '../../../../state/ducks/user/actions';
import { compose } from "redux";
const iconPath = process.env.PUBLIC_URL + '/assets/icons/';

class Login extends React.Component {


  render() {
    if(this.props.isAuthenticated)
      return <Redirect to={`/user:${this.props.userID}`} />;


    return (
      <div className='column'>
        <Panel panelName={'user'}>
          <h2>Login</h2>
          <img className='login-icon'
               src={`${iconPath}login-account-icon.jpg`}
               alt='Login Icon' />
          <LoginForm />
        </Panel>
      </div>
    );
  }
}

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
