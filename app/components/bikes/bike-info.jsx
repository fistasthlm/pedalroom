import React, { Component, PropTypes } from 'react';
import InstagramLink from '../viewHelper/instagram-link';

export default class BikeInfo extends Component {
   render() {
      const { bike } = this.props;

      return (
         <div className="bike">
            <div className="title">
               <h3>{bike.title}</h3>
               <InstagramLink handle={bike.instagramHandle} />
            </div>
         </div>
      )
   }
}

BikeInfo.propTypes = {
   bike: PropTypes.object.isRequired
};
