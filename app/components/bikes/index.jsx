import React, { Component, PropTypes } from 'react';
import BikeGrid from './bike-grid';

export default class Bikes extends Component {
   render() {
      return(
         <div>
            <h3>Bieks</h3>
            <BikeGrid />
         </div>
      );
   }
}

Bikes.propTypes = {};
