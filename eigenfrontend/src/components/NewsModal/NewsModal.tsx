// src/components/NewsModal/NewsModal.tsx
import React from 'react';
import { Modal } from 'antd';
import { NewsItem } from '../../types/types';
import './NewsModal.css'

interface NewsModalProps {
    visible: boolean;
    onClose: () => void;
    newsItem: NewsItem;
}

const NewsModal: React.FC<NewsModalProps> = ({ visible, onClose, newsItem }) => {
    const formattedPublishedAt = new Date(newsItem.publishedAt).toLocaleDateString('en-US');

    return (
        <Modal
            visible={visible}
            title={newsItem.title}
            onCancel={onClose}
            footer={null}
            width={800}
        >
            <div className="news-modal-content">
                {newsItem.urlToImage && <img src={newsItem.urlToImage} alt={newsItem.title} className="news-image"/>}
                <p><strong>Author:</strong> {newsItem.author}</p>
                <p><strong>Description:</strong> {newsItem.description}</p>
                <p><strong>Content:</strong> {newsItem.content}</p>
                <p><strong>Published At:</strong> {formattedPublishedAt}</p>
                <p><a href={newsItem.url} target="_blank" rel="noopener noreferrer">Read More</a></p>
            </div>
        </Modal>
    );
};

export default NewsModal;
