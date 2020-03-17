import React from 'react';

const DefaultButton = ({value, onClick}) => {
  return (
    <button
      className={'button btn'}
    >
      {value}
    </button>
  );
};

export default DefaultButton;
