import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    {name: 'portraits', description: 'Portraits of people in my life'}
]

const mockCurrentCatergory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
        categories={categories}
        SetCurrentCategory={mockSetCurrentCategory}
        CurrentCatergory={mockCurrentCatergory}
        />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Nav 
            categories={categories}
            SetCurrentCategory={mockSetCurrentCategory}
            CurrentCatergory={mockCurrentCatergory}/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav 
            categories={categories}
            SetCurrentCategory={mockSetCurrentCategory}
            CurrentCatergory={mockCurrentCatergory}/>);
        // Asssert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render (<Nav 
            categories={categories}
            SetCurrentCategory={mockSetCurrentCategory}
            CurrentCatergory={mockCurrentCatergory}/>);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})