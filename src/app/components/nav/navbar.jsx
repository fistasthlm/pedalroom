import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DesktopNavbar from 'components/nav/desktop-navbar';
import MobileNavbar from 'components/nav/mobile-navbar';
import Hamburger from 'components/nav/hamburger';
import Image from 'components/viewHelper/image';

class Navbar extends PureComponent {
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
       const logoUrl = 'https://images.contentful.com/' +
           'x1j0zkbk3421/4wgAQ4qPFKIyyeoUImGYko/66256a7ec6c12ea8f8d1d88bbcafe6ea/fistasthlm-logotype.png';
       return (
         <div className="nav-content">
            <div
               className="left-div"
               onClick={this.closeHamburgerMenu}>
               <NavLink to="/">
                  <Image
                     url={logoUrl}
                     className="logo"
                     resize={true}
                     width="200"
                     height="80" />
               </NavLink>
            </div>
            <div className="right-div">
               <Hamburger toggleMenu={this.toggleMenu} />
            </div>
            <DesktopNavbar />
            <div className={this.hamburgerMenuStyle()}>
                <MobileNavbar toggleMenu={this.toggleMenu} />
            </div>
         </div>
      );
   }
}

export default withRouter(Navbar);
