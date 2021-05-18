import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function UserButton() {

    const [open, setOpen] = useState( false );
    return (
        <div>
            <div className="ui inline dropdown  ">

                <li onClick={ () => setOpen( !open ) } className=" nav-item user-btn">
                    <i className="bars icon padding" />
                    <i className="large user circle icon" />

                </li>
                <div className={ `menu ${open ? "visible transition" : ""}` }  >

                    {/* //**DROPDOWN: LINK1 */ }
                    <NavLink
                        activeClassName="selected"
                        style={ { textDecoration: 'none' } }
                        to="/login"
                    >
                        { ' ' } <div onClick={ () => setOpen( !open ) } className="nav-item">Log-in</div>
                    </NavLink>

                    {/* //**DROPDOWN: LINK2 */ }
                    <NavLink style={ { textDecoration: 'none' } } to="/register">
                        <div onClick={ () => setOpen( !open ) } className="nav-item">Register</div>
                    </NavLink>

                    <hr />

                    {/* //**DROPDOWN: LINK3 */ }
                    <NavLink style={ { textDecoration: 'none' } } to="/contact">
                        <div onClick={ () => setOpen( !open ) } className="nav-item">Contact</div>
                    </NavLink>

                </div>
            </div>

        </div>
    );
}
