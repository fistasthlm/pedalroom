import React, { Component, PropTypes } from 'react';
import BikeGrid from './bike-grid';

export default class Bikes extends Component {
   render() {
      return(
         <div>
            <h1>Bieks</h1>
            <BikeGrid />
         </div>
      );
   }
}

Bikes.propTypes = {

};