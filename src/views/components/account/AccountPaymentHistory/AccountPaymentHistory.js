import React from 'react';

import Panel from "../../../UI/Panel/Panel";


const AccountPaymentHistory = () => {
  return (
    <div className="column is-variable">
      <Panel panelName={'payments'}>
        <h2 className='weight-bold'>Saved Payment Methods</h2>
      </Panel>
    </div>
  );
};

export default AccountPaymentHistory
