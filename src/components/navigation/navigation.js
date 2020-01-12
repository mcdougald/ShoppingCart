import React from 'react'
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from './navigation.module.scss';
import { Home } from '../home/home'
import { ShoppingCart as Shop } from '../shopping-cart/shopping-cart'
import { Checkout } from '../checkout/checkout'
import { UserInformation as Account } from '../user/information/information'

const Navigation = () => {
  return (
    <Router>
      <div className='top-bar'>
          <h1>Store Name</h1>
        <nav className={styles.navbar}>
            <ul className='navbar_column__left'>
              <li className='nav-item'>
                  <NavLink to='/' exact className={styles.navbar__link}>
                    Home
                  </NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink className={styles.navbar__link} to='/store'>
                    Shop
                  </NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink className={styles.navbar__link} to='/checkout'>
                    Checkout
                  </NavLink>
              </li>
            </ul>
            <ul className='navbar_column__right'>
              <li className='nav-item'>
                  <NavLink className={styles.navbar__link} to='/user'>Account</NavLink>
              </li>
              <li className='nav-item'>
                  <NavLink className={styles.navbar__link} to='/logout'>Logout</NavLink>
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



export { Navigation };
