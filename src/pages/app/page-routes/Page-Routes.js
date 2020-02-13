import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home } from '../../home/Home';
import { Shop } from '../../shop/Shop';
import { Checkout } from '../../checkout/Checkout';
import UserRoutes from '../../../components/user/user-routes/User-Routes';
import Shipping from '../../users/shipping/Shipping';
import NotFound from '../../not-found/Not-Found';

const PageRoutes = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/store'>
          <Shop />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/user:id'>
          <UserRoutes />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default PageRoutes
