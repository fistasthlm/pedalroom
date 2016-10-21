import React, {Component, PropTypes} from 'react';
import Nav from '../components/nav';
import { connect } from 'react-redux';

class Root extends Component {
   render() {
      return(
         <div className="content-container">
            <Nav />
            <div className="divider" />
            <div className="page-content">
               {this.props.children}
            </div>
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