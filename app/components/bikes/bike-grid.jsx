import React, { Component, PropTypes } from 'react';
import BikeTile from './bike-tile';

export default class BikeGrid extends Component {
   render() {
      const bieks = [
         {
            title: 'Cinelli Laser Corsa',
            member: '@discobiker'
         },
         {
            title: 'Cannondale Track `92',
            member: '@discobiker'
         },
         {
            title: 'Cannondale Track `95',
            member: '@peteholmberg'
         },
         {
            title: 'Cannondale Track `94',
            member: '@nkdms'
         },
         {
            title: 'Cannondale Track `92',
            member: '@god_galland'
         }
      ];

      return(
        <div>
           <BikeTile />
        </div>
      );
   }
}