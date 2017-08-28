import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import BikeTile from './bike-tile';
import Loader from '../viewHelper/loader';

export default function BikeGrid ({ bikes }) {
   return(
      <div className="bike-grid row gutter-0">
         {
            bikes && bikes.size > 0?
               bikes.map(bike => {
                  return <BikeTile key={bike.get('_id')}
                                   bike={bike} />;
               })
           :
               <Loader />
         }
      </div>
   );
}

BikeGrid.propTypes = {
   bikes: PropTypes.instanceOf(List).isRequired,
};
