import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { NavLink } from 'react-router-dom'

export default function DesktopNavbar ({ links }) {
  return (
    <div className='navbar'>
      {
        links.map((link, index) => {
          return (
            <NavLink
              key={`${index}-${link.get('to')}`}
              exact
              className='nav-item'
              activeClassName='active'
              to={link.get('to')}>
              {link.get('route')}
            </NavLink>
          )
        })
      }
    </div>
  )
}

DesktopNavbar.propTypes = {
  links: ImmutablePropTypes.list.isRequired
}
