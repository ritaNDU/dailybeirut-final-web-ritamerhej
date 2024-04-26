import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Post from '../data/post.type';

const initialValue: Post[] = [];

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    value: initialValue,
  },
  reducers: {
    store: (state, action: PayloadAction<Post[]>) => {
      state.value = action.payload;
    },
    add: (state, action: PayloadAction<Post[]>) => {
      state.value.push(...action.payload);
    },
  },
});

export const {store, add} = allPostsSlice.actions;
export default allPostsSlice.reducer;
