import { createSelector } from "@reduxjs/toolkit";

export const getPost = state => state.post.items;
export const getFilter = state => state.filter;
export const getError = state => state.post.error;
export const getIsLoading = state => state.post.isLoading;

// export const filteredNews = createSelector(
//   [getPost, getFilter],
//   (post, filter) => {
//     return post.filter(({ title }) =>
//       title.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
export const filteredNews = createSelector(
  [getPost, getFilter],
  (post, filter) => {
    if (!post || !Array.isArray(post)) {
      return [];
    }

    return post.filter(({ title }) =>
      title && title.toLowerCase().includes(filter && filter.toLowerCase())
    );
  }
);