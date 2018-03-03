import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DesktopNavbar() {
    return (
        <div className="navbar">
            <NavLink
                exact={true}
                className="nav-item"
                activeClassName="active"
                to="/">
                Home
            </NavLink>
            <NavLink
                exact={true}
                className="nav-item"
                activeClassName="active"
                to="/bikes">
                Bikes
            </NavLink>
            <NavLink
                exact={true}
                className="nav-item"
                activeClassName="active"
                to="/merch">
                For sale
            </NavLink>
        </div>
    );
}
