// src/containers/NewsList/NewsList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsList from './NewsList';

const sampleNewsArticles = [
  { title: 'Article 1', description: 'Description 1' },
  { title: 'Article 2', description: 'Description 2' },
  // Add more sample articles as needed
];

describe('NewsList component', () => {
  test('renders the news articles', () => {
    render(<NewsList activeCategory="business" searchQuery="" />);
    for (const newsArticle of sampleNewsArticles) {
      const titleElement = screen.getByText(newsArticle.title);
      const descriptionElement = screen.getByText(newsArticle.description);
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    }
  });

  // Add more test cases here
});