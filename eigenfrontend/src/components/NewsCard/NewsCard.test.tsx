// src/components/NewsCard/NewsCard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard';

const sampleNewsItem = {
  title: 'Sample Title',
  description: 'Sample Description',
};

describe('NewsCard component', () => {
  test('renders the news title and description', () => {
    render(<NewsCard newsItem={sampleNewsItem} />);
    const titleElement = screen.getByText(sampleNewsItem.title);
    const descriptionElement = screen.getByText(sampleNewsItem.description);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  // Add more test cases here
});