import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Panel from "../../../UI/Panel/Panel";
import Account from '../information/Information';
import Shipping from '../shipping/Shipping';


const Sidebar = ({ username }) => {
return (
  <div className='sidebar column is-variable is-one-quarter is-centered' >
    <nav className='menu'>
      <p className='menu-label'>
        {username}
      </p>
      <ul className='menu-list'>
        <li className='sidebar__item'>
          <NavLink
            className='sidebar__link'
            to='/user:id/'
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

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(Sidebar);

