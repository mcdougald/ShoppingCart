import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import Input from "../../UI/input/Input";

import Panel from '../../panel/Panel';

class Register extends React.Component {

  render() {
    return (
      <div className='column'>
        <Panel panelName={'user'}>
          <h2>Register</h2>
        </Panel>
      </div>
    );
  }
}

export default Register;
