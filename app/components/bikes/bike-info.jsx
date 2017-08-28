import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import BikePhotos from './bike-photos';
import BikeSpecs from './bike-specs';
import InstagramLink from '../viewHelper/instagram-link';

export default function BikeInfo({ bike }) {
   const images = bike.get('images');
   return (
      <div className="bike">
         <div className="bike-title">
            <h3>{bike.get('title')}</h3>
         </div>
         <InstagramLink handle={bike.get('instagram')}/>
         {
            images &&
               <BikePhotos images={images}/>
         }
         <BikeSpecs bike={bike}/>
      </div>
   );
}

BikeInfo.propTypes = {
   bike: PropTypes.instanceOf(Map).isRequired
};
