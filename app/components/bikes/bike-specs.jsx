import React, { PropTypes, Component } from 'react';

export default class BikeSpecs extends Component {
   render() {
      const { bike } = this.props;
      return (
         <div className="bike-specs">
            <ul className="property-group">
               <li className="property-group-item">
                  Frame - {bike.frame}
               </li>
               <li className="property-group-item">
                  Fork - {bike.fork}
               </li>
               <li className="property-group-item">
                  Cranks - {bike.cranks}
               </li>
               <li className="property-group-item">
                  Drivetrain - {bike.drivetrain}
               </li>
               <li className="property-group-item">
                  Handlebars/Stem - {bike.handlebars}
               </li>
               <li className="property-group-item">
                  Pedals - {bike.pedals}
               </li>
               <li className="property-group-item">
                  Saddle/Seatpost - {bike.saddle}
               </li>
               <li className="property-group-item">
                  Front wheel - {bike.frontWheel}
               </li>
               <li className="property-group-item">
                  Rear wheel - {bike.rearWheel}
               </li>
            </ul>
         </div>
      );
   }
}
