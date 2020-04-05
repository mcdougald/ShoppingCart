import React from 'react';
import PropTypes from 'prop-types';
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

HeaderLink.propTypes = {
  URI: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};

export default HeaderLink;
