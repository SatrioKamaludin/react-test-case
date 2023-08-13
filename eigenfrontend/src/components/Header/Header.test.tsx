// src/components/Header/Header.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders the app title', () => {
    render(<Header onCategoryChange={() => {}} onSearch={() => {}} />);
    const titleElement = screen.getByText('My News App');
    expect(titleElement).toBeInTheDocument();
  });

  // Add more test cases here
});