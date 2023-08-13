// src/containers/NewsList/NewsList.tsx
import React, { useEffect, useState } from 'react';
import { Pagination, Input } from 'antd';
import NewsCard from '../../components/NewsCard/NewsCard';
import { NewsItem } from '../../types/types';
import { fetchCategoryArticles, fetchSearchArticles } from '../../services/NewsService';
import './NewsList.css';

interface NewsListProps {
  activeCategory: string; // Add the activeCategory prop
  searchQuery: string; // Add the searchQuery prop
}

const NewsList: React.FC<NewsListProps> = ({ activeCategory, searchQuery }) => {
  const pageSize = 12; // Number of items per page
  const [currentPage, setCurrentPage] = React.useState(1);
  const [newsArticles, setNewsArticles] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (searchQuery) {
      // Fetch news articles based on search query
      fetchSearchArticles(searchQuery, currentPage)
        .then(articles => setNewsArticles(articles))
        .catch(error => console.error('Error fetching news:', error));
    } else {
      // Fetch news articles based on the activeCategory when the component mounts
      fetchCategoryArticles(activeCategory, currentPage)
        .then(articles => setNewsArticles(articles))
        .catch(error => console.error('Error fetching news:', error));
    }
  }, [activeCategory, currentPage, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="news-list">
      <Pagination
        className="pagination-top"
        current={currentPage}
        pageSize={pageSize}
        total={pageSize * 6}
        onChange={handlePageChange}
      />

      <div className="news-cards">
        {newsArticles.map((newsItem, index) => (
          <NewsCard key={index} newsItem={newsItem} />
        ))}
      </div>

      <Pagination
        className="pagination-bottom"
        current={currentPage}
        pageSize={pageSize}
        total={pageSize * 6}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default NewsList;
