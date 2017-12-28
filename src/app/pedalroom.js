import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './configure-store';
import Root from 'containers/root';
import Home from 'containers/home';
import Bikes from 'containers/bikes';
import Bike from 'containers/bike';
import Merch from 'containers/merch';
import './styles/main.scss';

const store = configureStore();
const history = createBrowserHistory();

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Root>
                <Route path="/" component={Home} />
                <Route path="/bikes" component={Bikes} />
                <Route path="/bike/:bikeId" component={Bike} />
                <Route path="/merch" component={Merch} />
            </Root>
        </Router>
    </Provider>
);

export default App;
