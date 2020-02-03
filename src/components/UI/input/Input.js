import React from "react";
/*
For default input attributes, you only need to set the input type prop,
then you pass the normal attributes you would pass to that HTML element

 */
const Input = (props) => {
  let inputElement = null;

  switch (props.inputType) {
    case ('input'):
      /*
      Expect to get the attributes you want to set on an input as props
      for the input wrapper.

      This allows you to distribute the props on the input element
       */
      inputElement = <input {...props} />;
      break;
    case ('select'):
      inputElement = <select {...props} />;
      break;
    default:
      inputElement = <input {...props} />;
  }

  return (
    <div>
      <label>props.label</label>
      {inputElement}
    </div>
  );
};

export default Input;
