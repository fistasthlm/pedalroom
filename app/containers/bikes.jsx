import React, { Component } from 'react';
import { connect } from 'react-redux';
import BikeGrid from '../components/bikes/bike-grid/bike-grid';
import Loader from '../components/viewHelper/loader';
import { getBikes } from '../actions/bike-actions';

class Bikes extends Component {
   componentDidMount() {
      const { dispatch, bikeState } = this.props;
      const bikes = bikeState.get('bikes');

      if (bikes.isEmpty()) {
         dispatch(getBikes());
      }
   }

   render() {
      const { bikeState } = this.props;
      const bikes = bikeState.get('bikes');

      if (bikes.isEmpty()) {
         return <Loader />;
      }

      return(
            <BikeGrid bikes={bikes} />
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
