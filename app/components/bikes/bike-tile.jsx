import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Map } from 'immutable';
import InstagramLink from '../viewHelper/instagram-link';
import Image from '../viewHelper/image';

export default function BikeTile({ bike }) {
   const hasImage = bike.get('images').first();
   return (
      <div className="bike-tile col-6 col-sm-4 col-md-4 col-lg-4">
         <Link to={'/bike/' + bike.get('_id')}>
            <div className="bike-image">
               {
                  hasImage &&
                     <Image url={hasImage.get('url')}
                            className="tile-picture"
                            resize={true}
                            width="260"
                            height="260"/>
               }

            </div>
            <div className="bike-title ellipsis">
               {bike.get('title')}
            </div>
         </Link>
         <div>
            <InstagramLink handle={bike.get('instagram')}/>
         </div>
      </div>
   );
}

BikeTile.propTypes = {
   bike: PropTypes.instanceOf(Map).isRequired
};
