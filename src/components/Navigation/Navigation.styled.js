import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
width: 75%;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

export const LinkLogo = styled(NavLink)`
font-family: 'Marck Script', cursive;
font-size: 18px;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--mainColor);

  &:hover {
    color: var(--accentColor);
  }

  @media screen and (max-width: 767px) {
    padding: 6px;
    font-weight: 500;
    color: var(--mainColor);
  }
`;

export const Link = styled(NavLink)`
text-transform: uppercase;
font-family: Montserrat, sans-serif;
font-size: 20px;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--mainColor);
  

  &.active {
    color: var(--accentColor);
  }

  &:hover {
    color: var(--accentColor);
  }

  @media screen and (max-width: 767px) {
    padding: 6px;
    font-weight: 500;
    color: var(--mainColor);
  }
`;