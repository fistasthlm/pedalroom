import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeInfo from '../components/bikes/bike-info';
import Loader from '../components/viewHelper/loader';
import { getBike } from '../components/bikes/actions';

class Bike extends Component {
   componentWillMount() {
       this.loadBike();
   }

   componentWillReceiveProps(nextProps) {
   }

   loadBike() {
       const {dispatch} = this.props;
       const id = window.location.hash.split('/')[2];
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

function propProvider(reduxState, props) {
   const { appState, bikeState } = reduxState;

   return {
      appState,
      bikeState
   };
}
export default connect(propProvider)(Bike);
