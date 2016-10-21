import React, { Component, PropTypes } from 'react';
import InstagramLink from '../../viewHelper/instagram-link';

export default class BikeTile extends Component {
   render() {
      const { bike } = this.props;
      return(
         <a href="#">
            <div className="bike-tile">
               <img src="../paralaxi.jpg" className="tile-picture" />
               <span>{bike.title}</span>
               <InstagramLink handle={bike.member} />
            </div>
         </a>
      );
   }
}

BikeTile.propTypes = {
   bike: PropTypes.object.isRequired
};