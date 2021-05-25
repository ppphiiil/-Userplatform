import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './UserButton.scss'

import { MyContext } from '../../App';


export default function UserButton() {
    const { isLogin, setIsLogin, currentUser, setCurrentUser } = useContext( MyContext );

    const [open, setOpen] = useState( false );

    const linkToProfile = (
        <NavLink
            activeClassName="selected"
            style={ { textDecoration: 'none' } }
            to={ `/profile/${currentUser.id}` }
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

    const linkToLogout = (
        <NavLink style={ { textDecoration: 'none' } } to="/">
            <div onClick={ () => logout() } className="nav-item">Logout</div>
        </NavLink>
    );


    const logout = () => {
        setIsLogin( false )
        setCurrentUser( {
            "id": "",
            "name": "",
            "username": "",
            "email": "",
            "userimage": "",
            "address": {
                "street": "",
                "suite": "",
                "city": "leer",
                "zipcode": "",
                "geo": {
                    "lat": "",
                    "lng": ""
                }
            },
            "phone": "",
            "website": "",
            "portfolio": {
                "portfolioimage1": "",
                "portfolioimage2": "",
                "portfolioimage3": "",
            },
            "tags": [],
            "company": {
                "name": "",
                "catchPhrase": "",
                "bs": ""
            }
        } );
    }

    return (
        <div>
            <div className="ui inline dropdown  ">

                <li onClick={ () => setOpen( !open ) } className=" nav-item user-btn">
                    <i className="bars icon padding" />
                    {
                        ( !isLogin )
                            ? <i className="large user circle icon" />
                            : ( currentUser.userimage )
                                ? <img className="ub-userimage" src={ currentUser.userimage } alt="user-icon" />
                                : <i className="large grey user circle icon" /> }

                </li>
                <div className={ `menu ${open ? 'visible transition' : ''}` }>

                    {/* //**DROPDOWN: LINK1 */ }

                    { isLogin ? linkToProfile : linkToLoginPage }

                    {/* //**DROPDOWN: LINK2 */ }
                    { isLogin ? '' : linkToRegisterPage }

                    <hr />

                    {/* //**DROPDOWN: LINK3 */ }
                    { linkToLogout }

                </div>
            </div>

        </div>
    );
}
