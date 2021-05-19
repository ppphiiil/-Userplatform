import React, { useContext } from 'react';

import logo from '../../images/logo/mycontentvideo-logo.png';

import { NavLink } from 'react-router-dom';
import UserButton from '../buttons/UserButton';

import { MyContext } from '../../App'

export default function Navigation() {

  const { isLogin, registered, userData } = useContext( MyContext )

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
          to="/allusers"
        >
          <li className="nav-item">Videographer </li>
        </NavLink>


        { isLogin ? "You are loged in" : <NavLink
          style={ { textDecoration: 'none' } }
          activeClassName="selected"
          to="/about"
        >
          <li className="nav-item"> About Us</li>
        </NavLink> }

        {/* //********************************
        //*** USER NAV BUTTON
        //******************************** */}

        <UserButton />

      </ul>

    </div>
  );
}
