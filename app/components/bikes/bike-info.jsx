import React, { Component, PropTypes } from 'react';
import BikePhotos from './bike-photos';
import InstagramLink from '../viewHelper/instagram-link';

export default class BikeInfo extends Component {
   render() {
      const { bike } = this.props;
      const images = bike.photos;
      console.log(bike);
      console.log(images);
      return (
         <div className="bike">
               <div className="bike-title">
                  <h3>{bike.title}</h3>
               </div>
               <InstagramLink handle={bike.instagramHandle} />
               <BikePhotos images={images} />
         </div>
      );
   }
}

BikeInfo.propTypes = {
   bike: PropTypes.object.isRequired
};
