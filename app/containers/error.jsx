import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Error extends Component {
   render() {
      return(
         <div>
            <h3>error :(</h3>
         </div>
      )
   }
}

function propProvider(reduxState, props) {
   const { appState } = reduxState;

   return {
      appState
   };
}

export default connect(propProvider)(Error);
