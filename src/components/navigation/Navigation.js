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
      <NavLink
        exact to="/"
      >
        <img className="logo" src={ logo } alt="logo" />
      </NavLink>
      {/* //********************************
      //*** NAV BAR
      //******************************** */}

      <ul className="nav-bar">
        <NavLink
          style={ { textDecoration: 'none' } }
          activeClassName="selected"
          to="/login"
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
