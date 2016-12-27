import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import Image from '../components/viewHelper/image';


export default class Nav extends Component {
   activeClass(routeName) {
      return this.context.router.isActive(routeName, false) ? 'current-page-item' : null;
   }

   render() {
      return (
         <div className="nav-content">
            <div className="left-div">
               <IndexLink to="/home">
                  <Image imgId="4wgAQ4qPFKIyyeoUImGYko" imgName="fistasthlm-logotype" className="logo" />
               </IndexLink>
            </div>
            <div className="right-div">
            </div>
            <div className="navbar-center">
               <nav id="navbar" className="navbar navbar-static-top">
                  <ul className="nav navbar-nav">
                     <li className={this.activeClass('home')}>
                        <IndexLink className="main-nav-item" to="/">Home</IndexLink>
                     </li>
                     <li className={this.activeClass('bikes')}>
                        <IndexLink className="main-nav-item" to="/bikes">Bikes</IndexLink>
                     </li>
                     <li className={this.activeClass('merch')}>
                        <IndexLink className="main-nav-item" to="/merch">For sale</IndexLink>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      );
   }
}

Nav.contextTypes = {
   router: PropTypes.object.isRequired
};

Nav.propTypes = {
   getImageFromCms: PropTypes.func.isRequired
};
