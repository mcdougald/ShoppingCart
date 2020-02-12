import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home } from '../../home/Home';
import { Shop } from '../../shop/Shop';
import { Checkout } from '../../checkout/Checkout';
import Account from '../../users/information/Information';
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
        <Route path='/user'>
          <Account />
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
