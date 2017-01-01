import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import Hamburger from '../components/nav/hamburger';
import Image from '../components/viewHelper/image';

export default class Nav extends Component {
   constructor(props) {
      super(props);

      this.state = {
         menuToggled: false,
      }
   }

   activeClass(routeName) {
      return this.context.router.isActive(routeName, false) ? 'current-page-item' : null;
   }

   toggleMenu() {
      this.setState({
         menuToggled: !this.state.menuToggled
      });
   }

   hamburgerMenuStyle() {
      return this.state.menuToggled ? 'hamburger-menu open' : 'hamburger-menu';
   }

   render() {
      return (
         <div className="nav-content">
            <div className="left-div">
               <IndexLink to="/home">
                  <Image url="https://images.contentful.com/x1j0zkbk3421/4wgAQ4qPFKIyyeoUImGYko/66256a7ec6c12ea8f8d1d88bbcafe6ea/fistasthlm-logotype.png"
                         className="logo"
                         resize={true}
                         width="200"
                         height="80" />
               </IndexLink>
            </div>
            <div className="right-div">
               <Hamburger toggleMenu={this.toggleMenu.bind(this)} />
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
            <div className={this.hamburgerMenuStyle()}>
               coin coin
            </div>
         </div>
      );
   }
}

Nav.contextTypes = {
   router: PropTypes.object.isRequired
};
