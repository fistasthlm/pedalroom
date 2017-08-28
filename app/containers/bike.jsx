import React, { Component } from 'react';
import { connect } from 'react-redux';
import BikeInfo from '../components/bikes/bike-info';
import Loader from '../components/viewHelper/loader';
import { getBike, clearBike } from '../actions/bike-actions';

class Bike extends Component {
   componentWillMount() {
       this.loadBike();
   }

   componentWillUnmount() {
      this.props.dispatch(clearBike());
   }

   loadBike() {
       const {dispatch} = this.props;
       const id = window.location.hash.split('/')[2].split('?')[0];
       dispatch(getBike(id));
   }

   render() {
      const { bikeState } = this.props;
      const state = bikeState.toJS();
      const bike = state.bike.fields;

      return (
            bike ?
               <BikeInfo bike={bike} />
            :
               <Loader />
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
export default connect(propProvider)(Bike);
