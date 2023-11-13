import { nanoid } from "nanoid";

export const addChannel = (link, title) => {
  return {
    type: "channel/addChannel",
    payload: {
      id: nanoid(),
      completed: false,
      title,
      link,
    },
  };
};

export const deleteChannel = channelId => {
  return {
    type: "channel/deleteChannel",
    payload: channelId,
  };
};

export const correctChannel = (channelId, newLink, newTitle) => {
  return {
    type: "channel/correctChannel",
    payload: {
      channelId,
      title: newTitle,
      link: newLink,
    },
  };
};

export const toggleFavorites = channelId => {
  return {
    type: "channel/toggleFavorites",
    payload: channelId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};