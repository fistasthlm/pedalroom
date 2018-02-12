import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './nav';
import Home from 'containers/home';
import Bikes from 'containers/bikes';
import Bike from 'containers/bike';
import Merch from 'containers/merch';

class Root extends PureComponent {
    render() {
        return (
            <div className="content-container">
                <Nav/>
                <div className="divider"/>
                <div className="page-content">
                    <Switch>
                        <Route
                            exact path="/"
                            component={Home} />
                        <Route
                            exact path="/bikes"
                            component={Bikes} />
                        <Route
                            exact path="/bike/:id"
                            component={Bike} />
                        <Route
                            exact path="/merch"
                            component={Merch} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Root);
