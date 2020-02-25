import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderLink = (props) => {
  return (
    <li className='nav-item'>
      <NavLink
        to={props.URI}
        exact
        className='navbar__link'
        activeClassName='navbar__link--active'
      >
        {props.linkTitle}
      </NavLink>
    </li>
  )
};

export default HeaderLink;
