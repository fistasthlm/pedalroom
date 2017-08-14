import React, { Component, PropTypes } from 'react';
import BikeTile from './bike-tile';
import Loader from '../viewHelper/loader';

export default class BikeGrid extends Component {
   render() {
      const { bikes } = this.props;

      return(
        <div className="bike-grid row gutter-0">
           {
              bikes.length > 0 ?
                 bikes.map(bike => {
                    return <BikeTile key={bike.sys.id}
                                     bike={bike} />;
                 })
              :
                  <Loader />
           }
        </div>
      );
   }
}

BikeGrid.propTypes = {
   bikes: PropTypes.array.isRequired,
};
