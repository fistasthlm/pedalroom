import React, { Component, PropTypes } from 'react';
import InstagramLink from '../../viewHelper/instagram-link';

export default class BikeTile extends Component {
   render() {
      const { bike } = this.props;

      return (
         <div className="bike-tile col-xs-6">
            <a href={'/bikes/' + bike.id}>
               <img src="../paralaxi.jpg" className="tile-picture" />
               <span>{bike.title}</span>
            </a>
            <InstagramLink handle={bike.member} />
         </div>
      );
   }
}

BikeTile.propTypes = {
   bike: PropTypes.object.isRequired
};
