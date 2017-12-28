import React from 'react';
import ReactDOM from 'react-dom';
import Pedalroom from './pedalroom';

import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};

render(Pedalroom);

if (module.hot) {
    module.hot.accept('./pedalroom', () => {
        const Pedalroom = require('./pedalroom').default;
        render(Pedalroom);
    });
}
