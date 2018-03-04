import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './navbar';

jest.mock('react-router-dom', () => ({
    withRouter: params => params,
    NavLink: params => params,
}));

const setup = () => {
    return shallow(<Navbar />);
};

describe('Render', () => {
    it('should render component', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
    });
});

describe('State', () => {
    it('should toggleMenu', () => {
        const wrapper = setup();

        wrapper.instance().toggleMenu();

        expect(wrapper.state().menuToggled).toEqual(true);
    });

    it('should close hamburger menu', () => {
        const wrapper = setup();

        wrapper.instance().closeHamburgerMenu();

        expect(wrapper.state().menuToggled).toEqual(false);
    });
});
