import React from 'react'
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom'

import './navigation.scss';

const Navigation = () => {
  return (
    <Router>
      <nav className='navbar'>
        <h1>Store Name</h1>
        <div className='navbar-column-1'>
          <ul>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <NavLink to='/'>Home</NavLink>
              </a>
            </li>
          </ul>
          <ul>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <NavLink to='/products'>Shop</NavLink>
              </a>
            </li>
          </ul>
          <ul>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <NavLink to='/checkout'>Checkout</NavLink>
              </a>
            </li>
          </ul>
        </div>
        <div className='navbar-column-2'>
          <ul>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <NavLink to='/user_account'>Account</NavLink>
              </a>
            </li>
          </ul>
          <ul>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <NavLink to='/logout'>Logout</NavLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
};

const NavigationPages = () => {

}

export { Navigation };
