// contentfulService.js
import axios, { AxiosResponse } from 'axios';
require('dotenv').config();

const SPACE_ID: string = process.env.CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN: string = process.env.CONTENTFUL_ACCESS_TOKEN || '';
const API_BASE_URL: string = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;


export const getAllPosts = async (): Promise<any[] | null> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_BASE_URL}/entries`, {
      params: {
        access_token: ACCESS_TOKEN,
        content_type: 'blogPost', 
      },
    });


    return response.data.items;
  } catch (error) {
    console.error(`Error fetching posts from Contentful. URL: ${API_BASE_URL}/entries`, error);
    return null;
  }
};

export const getPostBySlug = async (slug: string): Promise<any | null> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_BASE_URL}/entries`, {
      params: {
        access_token: ACCESS_TOKEN,
        content_type: 'blogPost',
        'fields.slug': slug,
      },
    });


    return response.data.items[0];
  } catch (error) {
    console.error(`Error fetching post from Contentful. URL: ${API_BASE_URL}/entries`, error);
    return null;
  }
};
