import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home } from '../home/Home';
import { Products as Shop } from '../products/Products';
import { Checkout } from '../checkout/Checkout';
import Account from '../../components/user/information/Information';
import NotFound from '../not-found/Not-Found';

const PageRoutes = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/store'>
          <Shop />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/user'>
          <Account />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default PageRoutes
