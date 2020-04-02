import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Sidebar from '../components/account/Sidebar/Sidebar';
import Account from '../components/account/Information/Information';
import Shipping from '../components/account/Shipping/Shipping';
import AccountPaymentHistory from '../components/account/AccountPaymentHistory/AccountPaymentHistory';
import OrderHistory from '../components/account/OrderHistory/OrderHistory';

const UserRoutes = () => {
  return (
    <Switch>
      <Route path='/user:id' exact>
        <div className='columns'>
          <Sidebar/>
          <Account/>
        </div>
        </Route>
        <Route path='/user:id/user-information'>
          <div className='columns'>
            <Sidebar/>
            <Account/>
          </div>
        </Route>
        <Route path='/user:id/shipping-information'>
          <div className='columns'>
            <Sidebar/>
            <Shipping/>
          </div>
        </Route>
      <Route path='/user:id/payment-information'>
        <div className='columns'>
          <Sidebar/>
          <AccountPaymentHistory/>
        </div>
      </Route>
      <Route path='/user:id/orders'>
        <div className='columns'>
          <Sidebar />
          <OrderHistory />
        </div>
      </Route>
      </Switch>
  );
};

export default UserRoutes
