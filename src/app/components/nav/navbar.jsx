import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'components/nav/hamburger';
import Image from 'components/viewHelper/image';

export default class Navbar extends PureComponent {
   constructor(props) {
      super(props);

      this.state = {
         menuToggled: false,
      };

      this.toggleMenu = this.toggleMenu.bind(this);
      this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this);
   }

   toggleMenu() {
      this.setState({
         menuToggled: !this.state.menuToggled
      });
   }

   closeHamburgerMenu() {
      this.setState({
         menuToggled: false
      });
   }

   hamburgerMenuStyle() {
      return this.state.menuToggled ? 'hamburger-menu open' : 'hamburger-menu';
   }

   render() {
      return (
         <div className="nav-content">
            <div
               className="left-div"
               onClick={this.closeHamburgerMenu}>
               <Link to="/home">
                  <Image
                     url="https://images.contentful.com/x1j0zkbk3421/4wgAQ4qPFKIyyeoUImGYko/66256a7ec6c12ea8f8d1d88bbcafe6ea/fistasthlm-logotype.png"
                     className="logo"
                     resize={true}
                     width="200"
                     height="80"/>
               </Link>
            </div>
            <div className="right-div">
               <Hamburger toggleMenu={this.toggleMenu}/>
            </div>
            <div className="navbar">
               <Link
                  className="nav-item"
                  to="/home">
                  Home
               </Link>
               <Link
                  className="nav-item"
                  to="/bikes">
                  Bikes
               </Link>
               <Link
                  className="nav-item"
                  to="/merch">
                  For sale
               </Link>
            </div>
            <div className={this.hamburgerMenuStyle()}>
               <div>
                  <div className="menu-item">
                     <Link
                        className="nav-item"
                        onClick={this.toggleMenu}
                        to="/home">
                        Home
                     </Link>
                  </div>
                  <div className="menu-item">
                     <Link
                        className="nav-item"
                        onClick={this.toggleMenu}
                        to="/bikes">
                        Bikes
                     </Link>
                  </div>
                  <div className="menu-item">
                     <Link
                        className="nav-item"
                        onClick={this.toggleMenu}
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
