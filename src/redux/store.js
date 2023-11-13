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
import { filtersReducer } from './filter/reducer.js';
import { channelReducer } from './channel/reducer.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    post: postReducer,
    filters: filtersReducer,
    channel: channelReducer,
  },
  middleware: [thunk, ],
});

export const persistor = persistStore(store);