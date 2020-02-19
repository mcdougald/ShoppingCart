import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLink from '../HeaderLink/HeaderLink';

const Header = () => {
  return (
    <div className='header'>
      <div className='top-bar'>
        <h1>Store Name</h1>
        <nav className={'navbar is-transparent'}>
          <ul className='navbar__column--left'>
            <HeaderLink URI={'/'} linkTitle={'Home'} />
            <HeaderLink URI={'/store'} linkTitle={'Store'} />
            <HeaderLink URI={'/checkout'} linkTitle={'Checkout'} />
          </ul>
          <ul className='navbar__column--right'>
            <HeaderLink URI={'/login'} linkTitle={'Login'} />
            <HeaderLink URI={'/register'} linkTitle={'Register'} />
          </ul>
        </nav>
      </div>
    </div>
  );
};




export default Header;
