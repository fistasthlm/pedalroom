import React, { Component, PropTypes } from 'react';
import BikeTile from './bike-tile';

export default class BikeGrid extends Component {
   render() {
      const bieks = [
         {
            id: 1,
            title: 'Cinelli Laser Corsa',
            member: 'discobiker'
         },
         {
            id: 2,
            title: 'Cannondale Track `92',
            member: 'discobiker'
         },
         {
            id: 3,
            title: 'Cannondale Track `95',
            member: 'peteholmberg'
         },
         {
            id: 4,
            title: 'Cannondale Track `94',
            member: 'nkdms'
         },
         {
            id: 5,
            title: 'Cannondale Track `92',
            member: 'god_galland'
         }
      ];

      return(
        <div className="bike-grid row gutter-0">
           {
              bieks.map(bike => {
                 return <BikeTile key={bike.id} bike={bike} />
              })
           }
        </div>
      );
   }
}
