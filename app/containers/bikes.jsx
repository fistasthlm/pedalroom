import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeGrid from '../components/bikes/bike-grid';
import { getBikes } from '../components/bikes/actions';

class Bikes extends Component {
   componentDidMount() {
      const { dispatch, bikeState } = this.props;
      const bikes = bikeState.get('bikes');
      if(bikes.length === 0) {
         dispatch(getBikes());
      }
   }

   render() {
      const { bikeState } = this.props;
      const { bikes } = bikeState.toJS();
      return(
         <div>
            <BikeGrid bikes={bikes} />
         </div>
      );
   }
}

function propProvider(reduxState, props) {
   const { appState, bikeState } = reduxState;

   return {
      appState,
      bikeState
   };
}
export default connect(propProvider)(Bikes);
