import React, { PropTypes, Component } from 'react';
import InstagramLogo from 'components/home/instagram-logo';

export default class HomePageInfo extends Component {
   render() {
      return(
         <div className="home">
            <div className="quote">
               <span>
                  Not a club, nor a gang. Just a group of drunks with a passion for bikes!
               </span>
            </div>
            <div className="instagram">
               <a href="https://www.instagram.com/fistasthlm" target="_blank">
                  <InstagramLogo />
               </a>
            </div>
            <div>
               <span>Check out our bikes or buy our shit!</span>
            </div>
         </div>
      );
   }
}
