import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/posts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createPost = createAsyncThunk(
  'posts/addPost',
  async (post, thunkAPI) => {
    try {
      const response = await axios.post('/posts', post);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId, thunkAPI) => {
    try {
      const response = await axios.delete(`/posts/${postId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const correctPost = createAsyncThunk(
  'posts/correctPost',
  async ({ postId, newBody, newTitle }, thunkAPI) => {
    try {
      const response = await axios.patch(`/posts/${postId}`,
        { body: newBody, title: newTitle });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavorites = createAsyncThunk(
  'posts/toggleFavorites',
  async (postId, thunkAPI) => {
    try {
      const response = await axios.patch(`/posts/${postId}`,
        { favorites: true }); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);