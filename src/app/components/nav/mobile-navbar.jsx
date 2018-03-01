import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MobileNavbar({ toggleMenu }) {
    return (
        <div>
            <div className="menu-item">
                <NavLink
                    exact={true}
                    className="nav-item"
                    activeClassName="active"
                    onClick={toggleMenu}
                    to="/">
                    Home
                </NavLink>
            </div>
            <div className="menu-item">
                <NavLink
                    exact={true}
                    className="nav-item"
                    activeClassName="active"
                    onClick={toggleMenu}
                    to="/bikes">
                    Bikes
                </NavLink>
            </div>
            <div className="menu-item">
                <NavLink
                    exact={true}
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

MobileNavbar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
};
