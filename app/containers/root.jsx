import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Root extends Component {
   render() {
      return(
         <div className="content-container">

         </div>
      )
   }
}

Root.propTypes = {
   dispatch: PropTypes.func.isRequired,
   appState: PropTypes.object.isRequired
};

function propProvider(reduxState, props) {
   const {appState} = reduxState;

   return {
      appState
   };
}

export default connect(propProvider)(Root);