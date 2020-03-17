import React from 'react';
import PropTypes from 'prop-types';

const AccountResetButton = ({value, onClick}) => {
  return (
    <button
      className={'button account-reset__button'}
      type='reset'
    >
      {value}
    </button>
  );
};

AccountResetButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default AccountResetButton;
