import React from 'react';
import PropTypes from 'prop-types';

const DefaultButton = ({value, onClick}) => {
  return (
    <button
      className={'button btn'}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

DefaultButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default DefaultButton;
