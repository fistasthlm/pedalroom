import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import configureStore from './configure-store';
import Root from 'containers/root';
import Home from 'containers/home';
import Bikes from 'containers/bikes';
import Bike from 'containers/bike';
import Merch from 'containers/merch';
import Error from 'containers/error';

document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
      <Provider store={configureStore()}>
         <Router history={hashHistory}>
            <Route path="/" component={Root}>
               <IndexRedirect to="/home"/>
               <Route path="home" component={Home} />
               <Route path="bikes" component={Bikes} />
               <Route path="bike/:bikeId" component={Bike} />
               <Route path="merch" component={Merch} />
               <Route path="*" component={Error} status={404} />
            </Route>
         </Router>
      </Provider>,
      document.getElementById('app')
   );
});
