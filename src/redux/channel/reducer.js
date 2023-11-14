
const channelInitialState = [
  { id: "0", title: "France:Breaking news", link: 'http://www.france24.com/fr/france/rss', favorites: true},
  // { id: "1", title: "Reddit:Front page", link: 'https://www.reddit.com/.rss', favorites: true},
  // { id: "2",  title: "Mobile:World Live", link: 'https://www.mobileworldlive.com/latest-stories/feed/', favorites: false},
];

export const channelReducer = (state = channelInitialState, action) => {
  switch (action.type) {
    case "channel/addChannel":
      return [...state, action.payload];
    case "channel/deleteChannel":
      return state.filter(item => item.id !== action.payload);
      case "channel/correctChannel": {
          const { channelId, link, title } = action.payload;
          return state.map(item =>
              item.id === channelId ? { ...item, link, title } : item
          )
    }  
      case "channel/toggleFavorites":
  return state.map(item => {
    if (item.id !== action.payload) {
      return item;
    }
    return { ...item, favorites: !item.favorites };
  });
    default:
      return state;
  }
};
