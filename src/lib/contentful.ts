// contentfulService.js
import axios, { AxiosResponse } from 'axios';
require('dotenv').config();

const SPACE_ID: string = process.env.CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN: string = process.env.CONTENTFUL_ACCESS_TOKEN || '';
const API_BASE_URL: string = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;


// Function to fetch all blog posts
export const getAllPosts = async (): Promise<any[] | null> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_BASE_URL}/entries`, {
      params: {
        access_token: ACCESS_TOKEN,
        content_type: 'blogPost', // Adjust this based on your Contentful content type
      },
    });


    return response.data.items;
  } catch (error) {
    console.error(`Error fetching posts from Contentful. URL: ${API_BASE_URL}/entries`, error);
    return null;
  }
};

// Function to fetch a single blog post by slug
export const getPostBySlug = async (slug: string): Promise<any | null> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_BASE_URL}/entries`, {
      params: {
        access_token: ACCESS_TOKEN,
        content_type: 'blogPost', // Adjust this based on your Contentful content type
        'fields.slug': slug,
      },
    });

    console.log('Response:', response.data); // Log the response data

    return response.data.items[0];
  } catch (error) {
    console.error(`Error fetching post from Contentful. URL: ${API_BASE_URL}/entries`, error);
    return null;
  }
};
