import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import Panel from "../../../UI/Panel/Panel";
import Account from '../information/Information';
import Shipping from '../shipping/Shipping';


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
            className='sidebar__link'
            to='/user:id/user-information'
            activeClassName='sidebar__link--active is-active'
            exact
          >User Information
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link'
            to='/user:id/shipping-information'
            activeClassName='sidebar__link--active is-active'
          >Shipping Information
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link'
            to='/user:id/payment-information'
            activeClassName='sidebar__link--active is-active'
          >Payment Information
          </NavLink>
        </li>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link'
            to='/user:id/orders'
            activeClassName='sidebar__link--active is-active'
          >Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default Sidebar;
