import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import allPostsReducer from './allPostsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    allPosts: allPostsReducer,
  },
});
export default store;
