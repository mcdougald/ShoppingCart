import React from "react";
import { Field, reduxForm } from 'redux-form/';
import Select from "react-select";
import PropTypes from "prop-types";
import Input from "../../../UI/Input/Input";

import { LOCATION_OPTIONS } from "../../../../config/locations";

import Panel from "../../../UI/Panel/Panel";

import "./Information.module.scss";
import InformationForm from './InformationForm';

class UserInformation extends React.Component {


  render() {

    return (
      <div className='column is-variable' >
        <Panel panelName={'information-form'}>
          <div className="form-container">
            <h2 className="panel-headers weight-bold">Finish Registering!</h2>
            <InformationForm />
          </div>
        </Panel>
      </div>
    );
  }
}

UserInformation.propTypes = {};

export default UserInformation;
/*
              <div className="formGroup">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  className="formControl"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  // value={this.state.firstName}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  className="formControl"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  // value={this.state.lastName}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Primary Phone</label>
                <Input
                  type="text"
                  className="formControl"
                  id="phone"
                  placeholder="Primary Phone"
                  onChange={this.handleChange}
                  // value={this.state.phone}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="formControl"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  // value={this.state.email}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="address1">Address Line 1</label>
                <Input
                  type="text"
                  className="formControl"
                  id="address1"
                  placeholder="Street Address"
                  onChange={this.handleChange}
                  // value={this.state.addressLine1}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="address2">Address Line 2</label>
                <Input
                  type="text"
                  className="formControl"
                  id="address2"
                  placeholder="Street Address"
                  onChange={this.handleChange}
                  // value={this.state.addressLine2}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="city">City</label>
                <Input
                  type="text"
                  className="formControl"
                  id="city"
                  placeholder="City"
                  onChange={this.handleChange}
                  // value={this.state.city}
                />
              </div>

              <div className="formGroup">
                <Select
                  options={LOCATION_OPTIONS.map( state => ( {
                    ...state,
                    label: state.name,
                    value: state.abbreviation
                  } ) )}
                  className="state-select-container"
                  classNamePrefix="state-select"
                  value={this.state.state}
                  id="state"
                  placeholder="State"
                  onChange={this.handleSelectChange}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="zipcode">Zip Code</label>
                <Input
                  type="text"
                  className="formControl"
                  id="zipcode"
                  placeholder="Zip Code"
                  onChange={this.handleChange}
                  // value={this.state.zipcode}
                />
              </div>
 */
