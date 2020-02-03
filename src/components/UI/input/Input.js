import React from "react";
import { LOCATION_OPTIONS } from '../../../config/locations';
/*
For default input attributes, you only need to set the input type prop,
then you pass the normal attributes you would pass to that HTML element

 */
const Input = props => {
  let inputElement = null;

  switch (props.inputType) {
    case "input":
      /*
      Expect to get the attributes you want to set on an input as props
      for the input wrapper.

      This allows you to distribute the props on the input element
       */
      inputElement = <input {...props} />;
      break;
    case "select":
      inputElement = (
        <React.Fragment>
          <label>props.label</label>
          <select {...props}>
            {props.formConfig.options.map( option => (
                <option key={option.abbreviation} value={option.abbreviation}>
                  {option.name}
                </option>
            ))}
          </select>
        </React.Fragment>
      );
      break;
    default:
      inputElement = <input {...props} />;
  }

  return (
    <React.Fragment>
      <label>props.label</label>
      {inputElement}
    </React.Fragment>
  );
};

export default Input;
