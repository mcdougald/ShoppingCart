import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
      <div className='top-bar'>
        <h1>Store Name</h1>
        <nav className={'navbar'}>
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
    </div>
  );
};


export default Header;
