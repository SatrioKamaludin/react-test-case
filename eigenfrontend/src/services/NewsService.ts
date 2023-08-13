// src/services/NewsService.ts
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY; // Replace with your actual API key
const apiUrl = 'https://newsapi.org/v2';

export const fetchCategoryArticles = async (category: string, page: number) => {
    const response = await axios.get(
        `${apiUrl}/top-headlines`,
        {
            params: {
                apiKey,
                category, // Use the category parameter instead of q
                page,
                pageSize: 16,
            },
        }
    );
    return response.data.articles;
};

export const fetchSearchArticles = async (query: string, page: number) => {
    const response = await axios.get(
        `${apiUrl}/everything`,
        {
            params: {
                apiKey,
                q: query,
                page,
                pageSize: 16,
            },
        }
    );
    return response.data.articles;
};

// export async function fetchNews(category: string, pageSize: number) {
//     const url = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data.articles;
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         return [];
//     }
// }

// export async function fetchNewsBySearchQuery(query: string, pageSize: number) {
//     const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data.articles;
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         return [];
//     }
// }