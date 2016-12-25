import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeInfo from './bikeInfo';
import { getBike } from './actions';

class Bike extends Component {
   componentWillMount() {
      const { dispatch } = this.props;
      const id = window.location.pathname.split('/')[2];
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
            <div></div>
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
