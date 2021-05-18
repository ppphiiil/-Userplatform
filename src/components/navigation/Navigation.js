import React from 'react';

import logo from '../../images/logo/mycontentvideo-logo.png';

import { NavLink } from 'react-router-dom';
import UserButton from '../buttons/UserButton';

export default function Navigation() {
  return (
    // ********************************
    // *** NAVIGATION
    // ********************************

    <div className="nav">
      <img className="logo" src={ logo } alt="logo" />

      {/* //********************************
      //*** NAV BAR
      //******************************** */}

      <ul className="nav-bar">
        <NavLink
          style={ { textDecoration: 'none' } }
          activeClassName="selected"
          to="/allusers"
        >
          <li className="nav-item">Videographer </li>
        </NavLink>

        <NavLink
          style={ { textDecoration: 'none' } }
          activeClassName="selected"
          to="/about"
        >
          <li className="nav-item"> About Us</li>
        </NavLink>

        {/* //********************************
        //*** USER NAV BUTTON
        //******************************** */}

        <UserButton />

      </ul>

    </div>
  );
}
