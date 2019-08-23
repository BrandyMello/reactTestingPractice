import React from 'react';
import App from './App';
// import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

describe ('Routes', () => {
    it('should use the unicorn\'s route', () => {
        const wrapper = mount(
            < MemoryRouter initialEntries={[ '/unicorns/5']} >
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(CreatureDetails)).toHaveLength(1)
    });

    it('should use the puppies route', () => {
        const wrapper = mount(
            < MemoryRouter initialEntries={[ '/puppies/1']} >
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(CreatureDetails)).toHaveLength(1)
    });

    it('should use the sharks route', () => {
        const wrapper = mount(
            < MemoryRouter initialEntries={[ '/sharks/3']} >
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(CreatureDetails)).toHaveLength(1)
    });
});