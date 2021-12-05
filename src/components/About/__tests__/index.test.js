import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('mathces snapshot DOM node structure', () => {
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})
