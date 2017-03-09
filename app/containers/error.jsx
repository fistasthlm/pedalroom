import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ErrorPage from 'components/error/error-page';

class Error extends Component {
   render() {
      return(
         <ErrorPage />
      );
   }
}

function propProvider(reduxState) {
   const { appState } = reduxState;

   return {
      appState
   };
}

export default connect(propProvider)(Error);
