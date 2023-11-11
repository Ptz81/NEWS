import { useAuth } from '../../hooks/useAuth.js';
import { Link, Nav } from './Navigation.styled.js';
import iconLogo from '../Images/logo.svg'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">
      <img src={iconLogo} width={"24px"} height={"24px"} alt="logo"/>
        NewsMaker
      </Link>
      {isLoggedIn && <Link to="/table">News</Link>}
    </Nav>
  );
};