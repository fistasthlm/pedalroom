import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileNavbar({ toggleMenu }) {
    return (
        <div>
            <div className="menu-item">
                <NavLink
                    className="nav-item"
                    activeClassName="active"
                    onClick={toggleMenu}
                    to="/">
                    Home
                </NavLink>
            </div>
            <div className="menu-item">
                <NavLink
                    className="nav-item"
                    activeClassName="active"
                    onClick={toggleMenu}
                    to="/bikes">
                    Bikes
                </NavLink>
            </div>
            <div className="menu-item">
                <NavLink
                    className="nav-item"
                    activeClassName="active"
                    onClick={toggleMenu}
                    to="/merch">
                    For sale
                </NavLink>
            </div>
        </div>
    );
}
