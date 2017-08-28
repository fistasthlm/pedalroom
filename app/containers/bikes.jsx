import React, { Component } from 'react';
import { connect } from 'react-redux';
import BikeGrid from '../components/bikes/bike-grid';
import { getBikes } from '../actions/bike-actions';

class Bikes extends Component {
   componentDidMount() {
      const { dispatch, bikeState } = this.props;
      const bikes = bikeState.get('bikes');

      if(!bikes) {
         dispatch(getBikes());
      }
   }

   render() {
      const { bikeState } = this.props;
      const bikes = bikeState.get('bikes');
      return(
         <div>
            {
               bikes &&
                  <BikeGrid bikes={bikes} />
            }
         </div>
      );
   }
}

function propProvider(reduxState) {
   const { appState, bikeState } = reduxState;

   return {
      appState,
      bikeState
   };
}
export default connect(propProvider)(Bikes);
