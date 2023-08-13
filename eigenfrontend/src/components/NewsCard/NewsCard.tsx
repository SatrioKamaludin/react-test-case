// src/containers/NewsList/NewsCard.tsx
import React from 'react';
import { Card } from 'antd';
import { NewsItem } from '../../types/types';
import './NewsCard.css';

interface NewsCardProps {
  newsItem: NewsItem; // Use the NewsItem interface
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
  return (
    <Card className="news-card">
      <h3>{newsItem.title}</h3>
      <p>{newsItem.description}</p>
      {/* Display other properties if needed */}
    </Card>
  );
};

export default NewsCard;
