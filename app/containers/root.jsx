import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/nav';

class Root extends Component {
   render() {
      return(
         <div className="content-container">
            <Nav />
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