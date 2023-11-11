import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected, thunkFunction } from "./services.js";
import { createPost, deletePost, fetchPost } from "./api.js";

const initialState = {
      items: [],
      isLoading: false,
      error: null
}

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.fulfilled,handleFulfilledGet)
      .addCase(createPost.fulfilled, handleFulfilledCreate)
      .addCase(deletePost.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(
        ...thunkFunction('fulfilled')
      ), handleFulfilled
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('pending')
      ), handlePending
      )
      .addMatcher(isAnyOf(
        ...thunkFunction('rejected')
      ), handleRejected
    )
  }
});
export const postReducer = PostSlice.reducer;