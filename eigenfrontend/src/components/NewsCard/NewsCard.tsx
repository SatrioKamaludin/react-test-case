// src/containers/NewsList/NewsCard.tsx
import React, { useState } from 'react';
import { Card } from 'antd';
import { NewsItem } from '../../types/types';
import NewsModal from '../NewsModal/NewsModal';
import './NewsCard.css';


interface NewsCardProps {
  newsItem: NewsItem; // Use the NewsItem interface
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const formattedPublishedAt = new Date(newsItem.publishedAt).toLocaleDateString('en-US');

  const handleCardClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Card className="news-card" onClick={handleCardClick}>
        <div className="news-image">
          {newsItem.urlToImage && <img src={newsItem.urlToImage} alt={newsItem.title} />}
        </div>
        <h3>{newsItem.title}</h3>
        <p><strong>{formattedPublishedAt}</strong></p>
        {/* Display other properties if needed */}
      </Card>
      <NewsModal
        visible={modalVisible}
        onClose={handleModalClose}
        newsItem={newsItem}
      />
    </div>
  );
};

export default NewsCard;
