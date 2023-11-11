import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice.js';
import { postReducer } from './news/PostSlice.js';
// import { filterReducer } from './filter/filterSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    post: postReducer,
    // filter: filterReducer,
  },
  middleware: [thunk, ],
});

export const persistor = persistStore(store);