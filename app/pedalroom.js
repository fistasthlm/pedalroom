import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import configureStore from './configure-store';
import Root from 'containers/root';
import Home from 'components/index';
import Bikes from 'components/bikes';
import Bike from 'components/bikes/bike';
import Merch from 'components/merch';

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
      <Provider store={configureStore()}>
         <Router history={browserHistory}>
            <Route path="/" component={Root}>
               <IndexRedirect to="/home"/>
               <Route path="home" component={Home} />
               <Route path="bikes" component={Bikes} />
               <Route path="bike/:bikeId" component={Bike} />
               <Route path="merch" component={Merch} />
            </Route>
         </Router>
      </Provider>,
      document.getElementById('app')
   );
});
