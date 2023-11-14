import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../UserMenu/UserMenu.styled";
// import { useSelector } from "react-redux";

export default function News() {
    const { id } = useParams();
    //   const channels = useSelector(state => state.channels);
//   const news = useSelector(state => state.news[id]);
     const history = useNavigate(); 
const handleGoBack = () => {
     history(-1); 
  };
  return (
      <div>
           <Button aria-label="go back" onClick={handleGoBack}>Go Back</Button>
          <h1>News {id}</h1>
          {/* <ul>
        {news.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul> */}
    </div>
  );
}