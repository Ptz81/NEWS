import { useAuth } from '../../hooks/useAuth.js';
import { Link, LinkLogo, Nav } from './Navigation.styled.js';
import iconLogo from '../Images/logo.svg'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <>
        <LinkLogo to="/">
      <img src={iconLogo} width={"24px"} height={"24px"} alt="logo"/>
        NewsMaker
      </LinkLogo>
      </>
      <>
      {isLoggedIn && <Link to="/posts">News</Link>}
      </>
      
    </Nav>
  );
};