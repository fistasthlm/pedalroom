import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Hamburger from '../components/nav/hamburger';
import Image from '../components/viewHelper/image';

export default class Nav extends Component {
   constructor(props) {
      super(props);

      this.state = {
         menuToggled: false,
      }
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
               <Link to="/home">
                  <Image url="https://images.contentful.com/x1j0zkbk3421/4wgAQ4qPFKIyyeoUImGYko/66256a7ec6c12ea8f8d1d88bbcafe6ea/fistasthlm-logotype.png"
                         className="logo"
                         resize={true}
                         width="200"
                         height="80" />
               </Link>
            </div>
            <div className="right-div">
               <Hamburger toggleMenu={this.toggleMenu.bind(this)} />
            </div>
            <div className="navbar-center">
               <nav id="navbar" className="navbar navbar-static-top">
                  <ul className="nav navbar-nav">
                     <li>
                        <Link activeClassName="active" className="nav-item" to="/home">Home</Link>
                     </li>
                     <li>
                        <Link activeClassName="active" className="nav-item" to="/bikes">Bikes</Link>
                     </li>
                     <li>
                        <Link activeClassName="active" className="nav-item" to="/merch">For sale</Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className={this.hamburgerMenuStyle()}>
               <div>
                  <div className="menu-item">
                     <Link activeClassName="active"
                           className="nav-item"
                           onClick={this.toggleMenu.bind(this)}
                           to="/home">
                        Home
                     </Link>
                  </div>
                  <div className="menu-item">
                     <Link activeClassName="active"
                           className="nav-item"
                           onClick={this.toggleMenu.bind(this)}
                           to="/bikes">
                        Bikes
                     </Link>
                  </div>
                  <div className="menu-item">
                     <Link activeClassName="active"
                           className="nav-item"
                           onClick={this.toggleMenu.bind(this)}
                           to="/merch">
                        For sale
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

Nav.contextTypes = {
   router: PropTypes.object.isRequired
};
