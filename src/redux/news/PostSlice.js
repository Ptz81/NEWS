import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { handleFulfilled, handleFulfilledCreate, handleFulfilledDelete, handleFulfilledGet, handleFulfilledToggleFavorites, handleFulfilledUpdate, handlePending, handleRejected, thunkFunction } from "./services.js";
import { correctPost, createPost, deletePost, fetchPost, toggleFavorites } from "./api.js";

const initialState = {
  items: [
  { id: "0", channel: "NASA", title: "Breaking news", body:'', link: 'https://www.nasa.gov/rss/dyn/breaking_news.rss'},
  { id: "1", channel: "Reddit", title: "Front page", body:'', link: 'https://www.reddit.com/.rss'},
  { id: "2", channel: "Mobile", title: "World Live", body:'', link: 'https://www.mobileworldlive.com/latest-stories/feed/'},
  ],
  favorites: false,
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
      .addCase(correctPost.fulfilled, handleFulfilledUpdate)
      .addCase(toggleFavorites.fulfilled, handleFulfilledToggleFavorites)
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