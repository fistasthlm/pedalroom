import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeGrid from './bike-grid';
import { getBikesFromCms } from './actions';

class Bikes extends Component {
   componentWillMount() {
      let { dispatch, bikeState } = this.props;
      dispatch(getBikesFromCms());
   }

   render() {
      return(
         <div>
            <h3>Bieks</h3>
            <BikeGrid />
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
