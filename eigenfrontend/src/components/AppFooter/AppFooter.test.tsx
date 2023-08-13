// src/components/AppFooter/AppFooter.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import AppFooter from './AppFooter';

describe('AppFooter component', () => {
  test('renders the copyright text', () => {
    render(<AppFooter />);
    const copyrightElement = screen.getByText('Copyright © Your Name');
    expect(copyrightElement).toBeInTheDocument();
  });

  // Add more test cases here
});