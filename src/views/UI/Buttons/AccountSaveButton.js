import React from 'react';
import PropTypes from 'prop-types';

const AccountSaveButton = ({value, onClick}) => {
  return (
    <button
      className={'button account-save__button'}
      type='submit'
    >
      {value}
    </button>
  );
};

AccountSaveButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default AccountSaveButton;
