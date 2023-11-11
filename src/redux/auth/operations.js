import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const authAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setAuthHeader = token => {
  authAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  authAxios.defaults.headers.common.Authorization = '';
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      //  const data = {
      //    username: credentials.username, 
         
      //   password: credentials.password,
      // };
       const res = await authAxios.post('/users/login', credentials);
      
      console.log('Response from login:', res.data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {

      console.error('Login error:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authAxios.post('/users/logout');
 
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await authAxios.get('/users/current');
      console.log('Response from refresh:', res.data);
      return res.data;
    } catch (error) {
      setAuthHeader(persistedToken);

      console.error('Refresh error:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const authAxios = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

// const jsonPlaceholderAxios = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// });


// const setAuthHeader = token => {
//   authAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };


// // export const register = createAsyncThunk(
// //   'auth/register',

// //   async (credentials, thunkAPI) => {
// //     try {
// //       const res = await authAxios.post('/users/signup', credentials);

// //       setAuthHeader(res.data.token);
// //       return res.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );
// // console.log(register)

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await authAxios.post('/users/login', credentials);
//       console.log(res.data);
//       setAuthHeader(res.data.token);
//        const postsResponse = await jsonPlaceholderAxios.get('/posts');
//       const postsData = postsResponse.data;
// console.log(postsData)

//       return { user: res.data, posts: postsData };
//       // return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// console.log(logIn)

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });


// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       setAuthHeader(persistedToken);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );