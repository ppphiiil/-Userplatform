import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { MyContext } from '../../App';
import ProfilePage from '../pages/ProfilePage';

export default function UserButton() {
    const { isLogin, registered, userData } = useContext( MyContext );

    const [open, setOpen] = useState( false );

    const linkToProfile = (
        <NavLink
            activeClassName="selected"
            style={ { textDecoration: 'none' } }
            to="/profile"
        >
            {' ' }
            <div onClick={ () => setOpen( !open ) } className="nav-item">Profile</div>
        </NavLink>
    );

    const linkToLoginPage = (
        <NavLink
            activeClassName="selected"
            style={ { textDecoration: 'none' } }
            to="/login"
        >


            <div onClick={ () => setOpen( !open ) } className="nav-item">Log-in</div>
        </NavLink>
    );

    const linkToRegisterPage = (
        <NavLink style={ { textDecoration: 'none' } } to="/register">
            <div onClick={ () => setOpen( !open ) } className="nav-item">Register</div>
        </NavLink>
    );

    const linkToContact = (
        <NavLink style={ { textDecoration: 'none' } } to="/contact">
            <div onClick={ () => setOpen( !open ) } className="nav-item">Contact</div>
        </NavLink>
    );



    return (
        <div>
            <div className="ui inline dropdown  ">

                <li onClick={ () => setOpen( !open ) } className=" nav-item user-btn">
                    <i className="bars icon padding" />
                    <i className="large user circle icon" />

                </li>
                <div className={ `menu ${open ? 'visible transition' : ''}` }>

                    {/* //**DROPDOWN: LINK1 */ }

                    { isLogin ? linkToProfile : linkToLoginPage }

                    {/* //**DROPDOWN: LINK2 */ }
                    { isLogin ? '' : linkToRegisterPage }

                    <hr />

                    {/* //**DROPDOWN: LINK3 */ }
                    { linkToContact }

                </div>
            </div>

        </div>
    );
}
