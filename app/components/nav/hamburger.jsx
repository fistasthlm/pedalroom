import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';

export default class Hamburger extends Component {
   render(){
      const {toggled, toggleMenu } = this.props;
      return(
         <div className="hamburger-button">
            <button id="navbar-toggle-btn-left" className="toggle-button" onClick={toggleMenu.bind(this)}>
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
            </button>
         </div>
      )
   }
}

Hamburger.propTypes = {
   toggleMenu: PropTypes.func.isRequired
};
