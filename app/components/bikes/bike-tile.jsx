import React, { Component, PropTypes } from 'react';
import InstagramLink from '../../viewHelper/instagram-link';

export default class BikeTile extends Component {
   render() {
      const { bike } = this.props;
      return(
         <div className="bike-tile">
            <img src="../paralaxi.jpg" className="tile-picture" />
            <InstagramLink handle={bike.handle} />
         </div>
      );
   }
}

BikeTile.propTypes = {
   bike: PropTypes.object.isRequired
};