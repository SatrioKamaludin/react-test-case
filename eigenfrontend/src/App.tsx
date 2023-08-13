// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';
import NewsList from './containers/NewsList/NewsList'; // Import NewsList component
import AppFooter from './components/AppFooter/AppFooter';

const { Content } = Layout;

const App = () => {
  const [activeCategory, setActiveCategory] = useState('business');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery(''); // Clear search query when changing categories
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveCategory(''); // Clear active category when performing a search
  };

  // Define your news data here
  // const newsData = [
  //   {
  //     title: 'News Title 1',
  //     description: 'This is a description for News 1',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   {
  //     title: 'News Title 2',
  //     description: 'This is a description for News 2',
  //   },
  //   // Add more news items as needed
  // ];

  return (
    <Layout className="app-layout">
      <Header onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <Content className="app-content">
        <div className="content-container">
          <NewsList activeCategory={activeCategory} searchQuery={searchQuery} />
          <AppFooter /> {/* Use the AppFooter component */}
        </div>
      </Content>
    </Layout>
  );
};

export default App;
