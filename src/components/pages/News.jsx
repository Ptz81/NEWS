import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "../UserMenu/UserMenu.styled";
// import { useEffect, useState } from "react";
// import RSSParser from 'rss-parser';  
import { PostList } from "../Post/PostList";
// import { useSelector } from "react-redux";
// import axios from 'axios';
// import {PostList} from "../Post/PostList";


export default function News() {
    const { id } = useParams();
    // const [news, setNews] = useState([]);
    // const channelInitialState = useSelector((state) => state.channel);
    const history = useNavigate();

    const handleGoBack = () => {
        history(-1);
    };

    
//     const parseRSSFeed = async (url) => {
//   try {
//     const CORS_PROXY = 'http://crossorigin.kmt.orange.com/';
//     const response = await axios.get(CORS_PROXY + url);
//     const xml = response.data;
//     const result = await parseString(xml, { trim: true, explicitArray: false });
//     return result.rss.channel.item;
//   } catch (error) {
//     console.error('Error fetching and parsing RSS feed:', error);
//     throw error;
//   }
// };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetchChannelLink(id);
//                 const feed = await parseRSSFeed(response.link);
//                 setNews(feed.items);
//             } catch (error) {
//                 console.error("Error fetching and parsing RSS feed:", error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     const fetchChannelLink = (channelId) => {
//         const channel = channelInitialState.find((channel) => channel.id === channelId);
//         return channel;
//     };

    return (
        <div>
            <Button aria-label="go back" onClick={handleGoBack}>Go Back</Button>
            <h1>News {id}</h1>
            <PostList />
            <Outlet />
        </div>
    );
}
