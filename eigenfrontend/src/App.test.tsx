// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the app header', () => {
    render(<App />);
    const headerElement = screen.getByText('My News App');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the app footer', () => {
    render(<App />);
    const footerElement = screen.getByText('Copyright © Your Name');
    expect(footerElement).toBeInTheDocument();
  });

  // Add more test cases here
});
