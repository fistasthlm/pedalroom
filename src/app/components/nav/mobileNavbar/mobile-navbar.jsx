import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default function MobileNavbar({ links, toggleMenu }) {
    return (
        <div>
            {
                links.map((link, index) => {
                    return (
                        <div
                            key={`${index}-${link.get('to')}`}
                            className="menu-item">
                            <NavLink
                                exact={true}
                                className="nav-item"
                                activeClassName="active"
                                onClick={toggleMenu}
                                to={link.get('to')}>
                                {link.get('route')}
                            </NavLink>
                        </div>
                    );
                })
            }
        </div>
    );
}

MobileNavbar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    links: ImmutablePropTypes.list.isRequired,
};
