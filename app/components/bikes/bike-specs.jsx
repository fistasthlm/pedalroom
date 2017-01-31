import React, { PropTypes, Component } from 'react';

export default class BikeSpecs extends Component {
   render() {
      const { bike } = this.props;
      console.log(bike);
      return (
         <div className="bike-specs">
            <div>
               <span>Frame:</span><span>{bike.frame}</span>
            </div>
            <div>
               <span>Fork:</span><span>{bike.fork}</span>
            </div>
            <div>
               <span>Cranks/Bottom bracket:</span><span>{bike.cranks}</span>
            </div>
            <div>
               <span>Pedals:</span><span>{bike.pedals}</span>
            </div>
            <div>
               <span>Drivetrain/Cog/Chainring/Chain:</span><span>{bike.drivetrain}</span>
            </div>
            <div>
               <span>Handlebars/Stem:</span><span>{bike.handlebars}</span>
            </div>
            <div>
               <span>Saddle/Seatpost:</span><span>{bike.saddle}</span>
            </div>
            <div>
               <span>Front Wheel/Hub/Tire:</span><span>{bike.frontWheel}</span>
            </div>
            <div>
               <span>Rear Wheel/Hub/Tire:</span><span>{bike.rearWheel}</span>
            </div>
         </div>
      );
   }
}
