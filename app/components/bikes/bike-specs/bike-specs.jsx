import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

export default function BikeSpecs({ bike }) {
    console.log(bike);
    return (
        <div className="bike-specs">
            <div className="bike-specs__property-group">
                <div className="bike-specs__property-group-item">
                    Frame - {bike.get('frame')}
                </div>
                <div className="bike-specs__property-group-item">
                    Fork - {bike.get('fork')}
                </div>
                <div className="bike-specs__property-group-item">
                    Cranks - {bike.get('cranks')}
                </div>
                <div className="bike-specs__property-group-item">
                    Drivetrain - {bike.get('drivetrain')}
                </div>
                <div className="bike-specs__property-group-item">
                    Handlebars/Stem - {bike.get('handlebars')}
                </div>
                <div className="bike-specs__property-group-item">
                    Pedals - {bike.get('pedals')}
                </div>
                <div className="bike-specs__property-group-item">
                    Saddle/Seatpost - {bike.get('saddle')}
                </div>
                <div className="bike-specs__property-group-item">
                    Front wheel - {bike.get('frontWheel')}
                </div>
                <div className="bike-specs__property-group-item">
                    Rear wheel - {bike.get('rearWheel')}
                </div>
            </div>
        </div>
    );
}

BikeSpecs.propTypes = {
    bike: PropTypes.instanceOf(Map).isRequired
};
