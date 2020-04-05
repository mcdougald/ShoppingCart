import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home/Home';
import Shop  from '../pages/shop/Shop';
import Checkout from '../pages/checkout/Checkout';
import Login from '../components/user/Login/Login';
import Register from '../components/user/Register/Register';
import UserRoutes from './User-Routes';
import NotFound from '../pages/not-found/Not-Found';
import ScrollToTop from '../utils/ScrollToTop';

const PageRoutes = () => {
  return (
    <div className='container is-fullhd'>
      <Switch>
      <Route path='/store'>
        <ScrollToTop />
        <Shop/>
      </Route>
      <Route path='/checkout'>
        <Checkout/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/register'>
        <Register/>
      </Route>
      <Route path='/user:id'>
        <UserRoutes/>
      </Route>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
    </div>
  );
};

export default PageRoutes
