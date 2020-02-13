import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Sidebar from '../sidebar/Sidebar';
import Account from '../../../pages/users/information/Information';
import Shipping from '../../../pages/users/shipping/Shipping';


const UserRoutes = () => {
  return (
    <Switch>
      <Route path='/user:id' exact>
        <div className='columns'>
          <Sidebar/>
          <Account/>
        </div>
        </Route>
        <Route path='/user:id/user-information' exact>
          <div className='columns'>
            <Sidebar/>
            <Account/>
          </div>
        </Route>
        <Route path='/user:id/shipping-information' exact>
          <div className='columns'>
            <Sidebar/>
            <Shipping/>
          </div>
        </Route>
      </Switch>
  );
};

export default UserRoutes
