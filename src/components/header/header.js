import React from 'react'
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from './header.module.scss';
import { Home } from '../../pages/home/home'
import { ShoppingCart as Shop } from '../../pages/shopping-cart/shopping-cart'
import { Checkout } from '../../pages/checkout/checkout'
import { UserInformationForm as Account } from '../user/information/information'

const Header = () => {
  return (
    <Router>
      <div className='top-bar'>
          <h1>Store Name</h1>
        <nav className={styles.navbar}>
            <ul className='navbar__column--left'>
              <li className='nav-item'>
                  <NavLink
                    to='/'
                    exact
                    className='navbar__link'
                    activeClassName='navbar__link--active'
                  >
                    Home
                  </NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink
                    className='navbar__link'
                    to='/store'
                    activeClassName='navbar__link--active'
                  >
                    Shop
                  </NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink
                    className='navbar__link'
                    to='/checkout'
                    activeClassName='navbar__link--active'
                  >
                    Checkout
                  </NavLink>
              </li>
            </ul>
            <ul className='navbar__column--right'>
              <li className='nav-item'>
                  <NavLink
                    className='navbar__link'
                    to='/user'
                    activeClassName='navbar__link--active'
                  >Account</NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink
                    className='navbar__link'
                    to='/logout'
                    activeClassName='navbar__link--active'
                  >Logout</NavLink>
              </li>
            </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/store' component={Shop}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/user' component={Account}/>
      </Switch>
    </Router>
  );
};



export { Header };
