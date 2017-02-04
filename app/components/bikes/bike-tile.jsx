import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import InstagramLink from '../viewHelper/instagram-link';
import Image from '../viewHelper/image';

export default class BikeTile extends Component {
   render() {
      const { bike } = this.props;

      const bikeMeta = bike.sys;
      const bikeInfo = bike.fields;
      const bikeImage = bikeInfo.photos[0].fields.file.url;
      return (
         <div className="bike-tile col-6 col-sm-4 col-md-4 col-lg-4">
            <Link to={'/bike/' + bikeMeta.id}>
               <div className="bike-image">
                  <Image url={bikeImage}
                         className="tile-picture"
                         resize={true}
                         width="260"
                         height="260" />
               </div>
               <div className="bike-title ellipsis">
                  {bikeInfo.title}
               </div>
            </Link>
            <div>
               <InstagramLink className="insta-link" handle={bikeInfo.instagramHandle} />
            </div>
         </div>
      );
   }
}

BikeTile.propTypes = {
   bike: PropTypes.object.isRequired
};
