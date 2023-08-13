// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { Layout, Input, Select, Menu, Tabs } from 'antd';
import './Header.css';

const { Header: AntdHeader } = Layout;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

interface HeaderProps {
    onSearch: (query: string) => void;
    onCategoryChange: (category: string) => void;
}


const Header: React.FC<HeaderProps> = ({ onSearch, onCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        onCategoryChange(category);
        // Call a function to update news articles based on the selected category
        // You'll need to implement this function in the NewsList component
    };

    return (
        <AntdHeader className="header">
            <div className="title">News App</div>
            <div className="search-category">
                <Tabs
                    className="category-tabs"
                    activeKey={activeCategory}
                    onChange={handleCategoryChange}
                >
                    <TabPane tab="General" key="general" />
                    <TabPane tab="Business" key="business" />
                    <TabPane tab="Entertainment" key="entertainment" />
                    <TabPane tab="Health" key="health" />
                    <TabPane tab="Science" key="science" />
                    <TabPane tab="Sports" key="sports" />
                    <TabPane tab="Technology" key="technology" />
                </Tabs>
                <Input.Search
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onSearch={handleSearch}
                    enterButton
                />
            </div>
        </AntdHeader>
    );
};

export default Header;
