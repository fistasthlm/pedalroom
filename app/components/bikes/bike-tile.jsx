import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import InstagramLink from '../viewHelper/instagram-link';

export default class BikeTile extends Component {
   render() {
      const { bike } = this.props;

      return (
         <div className="bike-tile col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <IndexLink to={'/bike/' + bike.id}>
               <div className="bike-image">
                  <img src="../paralaxi.jpg" className="tile-picture" />
               </div>
               <div className="bike-title ellipsis">
                  {bike.title}
               </div>
            </IndexLink>
            <div>
               <InstagramLink className="insta-link" handle={bike.member} />
            </div>
         </div>
      );
   }
}

BikeTile.propTypes = {
   bike: PropTypes.object.isRequired
};
