import React from "react";
import { LOCATION_OPTIONS } from "../../../config/locations";
/*
For default input attributes, you only need to set the input type prop,
then you pass the normal attributes you would pass to that HTML element

 */
const Input = props => {
  let inputElement = null;
  let inputClassName = `field-element__input-field--${props.inputType}`;

  switch (props.inputType) {
    case "input":
      /*
      Expect to get the attributes you want to set on an input as props
      for the input wrapper.

      This allows you to distribute the props on the input element
       */
      inputElement = (
        <input
          className={inputClassName}
          {...props.fieldConfig}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <React.Fragment>
          <select value={props.value} className={inputClassName} onChange={props.changed}>
            <option value="" selected="selected">
              {props.selected}
            </option>
            {props.fieldConfig.options.map(option => (
              <option
                key={option.abbreviation}
                value={option.name}
                title={option.name}
                data-descr={option.name}
              >
                {option.abbreviation}
              </option>
            ))}
          </select>
        </React.Fragment>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClassName}
          {...props.fieldConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  if (props.label !== null) {
    return (
      <React.Fragment>
        <div className="field-element">
          <label>{props.label}</label>
          {inputElement}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="field-element">{inputElement}</div>
      </React.Fragment>
    );
  }
};

export default Input;
