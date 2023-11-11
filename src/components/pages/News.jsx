// import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { getIsLoading } from '../../redux/contacts/selectors.js';
// import ContactList from '../ContactList/ContactList.jsx';
// import Filter from '../Filter/Filter.jsx';
// import Loader from '../Loader/Loader.jsx';
import { NewsContainer, NewsPage, TitleNews } from './pages.styled.js';


export default function Contacts() {

//   const isLoading = useSelector(getIsLoading);

  return (
    <>
      <NewsPage>
          <div>
      <Helmet>
        <TitleNews>Your News filter</TitleNews>
      </Helmet>
      {/* <div>{isLoading && <Loader/>}</div> */}
      {/* <Filter /> */}
      </div>
        <Helmet>
        <TitleNews>News List</TitleNews>
      </Helmet>
        {/* <ContactForm /> */}
        {/* <div>{isLoading && <Loader/>}</div> */}
         <NewsContainer>
         <div>
      {/* <ContactList /> */}
        </div>
      </NewsContainer>
</NewsPage>
    </>
  );
}