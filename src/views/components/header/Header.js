import React from 'react';
import { connect } from "react-redux";

import HeaderLink from '../../UI/HeaderLink/HeaderLink';

const Header = ({ user, userID }) => {
  const guestLinks = (
    <ul className='navbar__column--right'>
      <HeaderLink URI={'/login'} linkTitle={'Login'} />
      <HeaderLink URI={'/register'} linkTitle={'Register'} />
    </ul>
  );

  const authLinks = (
    <ul className='navbar__column--right'>
      <HeaderLink URI={`/user:${userID}`} linkTitle={'Account'} />
      <HeaderLink URI={'/logout'} linkTitle={'Logout'} />
    </ul>
  )


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
          {!user && guestLinks}
          {user && authLinks}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userID: state.id,
  isAuthenticated: state.isAuthenticated
});


export default connect(mapStateToProps)(Header);
