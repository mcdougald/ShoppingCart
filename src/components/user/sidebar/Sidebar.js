import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import Panel from "../../../components/panel/Panel";
import Account from '../../../pages/users/information/Information';
import Shipping from '../../../pages/users/shipping/Shipping';


const Sidebar = () => {
return (
  <div className='sidebar column is-variable is-one-quarter is-centered' >
    <nav className='menu'>
      <p className='menu-label'>
        Username
      </p>
      <ul className='menu-list'>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link is-active'
            to='/user:id/user-information'
            activeClassName='sidebar__link--active'
          >User Information
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link'
            to='/user:id/shipping-information'
            activeClassName='sidebar__link--active'
          >Shipping Information
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link'
            to='/user:id/payment-information'
            activeClassName='sidebar__link--active'
          >Payment Information
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link'
            to='/user:id/orders'
            activeClassName='sidebar__link--active'
          >Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default Sidebar;
