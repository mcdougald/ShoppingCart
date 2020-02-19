import React from "react";
import PropTypes from "prop-types";
import Input from "../../UI/input/Input";

import Panel from '../../panel/Panel';

class Login extends React.Component {

  render() {
    return (
      <div className='column'>
        <Panel panelName={'user'}>
          <h2>Login</h2>
        </Panel>
      </div>
    );
  }
}

export default Login;
