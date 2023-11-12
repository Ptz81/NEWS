import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIsLoading } from '../../redux/news/selectors.js';
// import ContactList from '../ContactList/ContactList.jsx';
// import Filter from '../Filter/Filter.jsx';
import Loader from '../Loader/Loader.jsx';
import { NewsContainer, NewsPage, TitleNews } from './pages.styled.js';


export default function Contacts() {

  const isLoading = useSelector(getIsLoading);

  return (
    <> 
    <Helmet>
        <TitleNews>Your News filter</TitleNews>
      </Helmet>

  <NewsPage>
      <div>{isLoading && <Loader/>}</div>   
      {/* <Filter /> */}
        <TitleNews>News Channel</TitleNews>
        {/* <NewsForm /> */}
        <div>{isLoading && <Loader/>}</div>
         <NewsContainer>

      {/* <ChannelList /> */}

      </NewsContainer>
  </NewsPage>
    </>
  );
}