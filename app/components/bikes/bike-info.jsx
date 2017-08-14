import React from 'react';
import PropTypes from 'prop-types';
import BikePhotos from './bike-photos';
import BikeSpecs from './bike-specs';
import InstagramLink from '../viewHelper/instagram-link';

export default function BikeInfo({ bike }) {
   const images = bike.photos;
   return (
      <div className="bike">
         <div className="bike-title">
            <h3>{bike.title}</h3>
         </div>
         <InstagramLink handle={bike.instagramHandle}/>
         <BikePhotos images={images}/>
         <BikeSpecs bike={bike}/>
      </div>
   );
}

BikeInfo.propTypes = {
   bike: PropTypes.object.isRequired
};
