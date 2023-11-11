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
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(`/posts/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);