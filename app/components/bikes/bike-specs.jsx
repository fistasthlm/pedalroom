import React, { PropTypes, Component } from 'react';

export default class BikeSpecs extends Component {
   render() {
      const { bike } = this.props;
      const properties = Object.entries(bike);

      return (
         <div className="bike-specs">
            {
               properties.map((property, index) => {
                  // ignore photos
                  if (index !== 0) {
                     return(
                        <div key={index}>
                           <span className="property">{property[0]}: </span><span>{property[1]}</span>
                        </div>
                     );
                  }
               })
            }
         </div>
      );
   }
}
