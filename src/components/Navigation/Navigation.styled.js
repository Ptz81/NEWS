import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 14px;

  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

export const Link = styled(NavLink)`
font-family: 'Marck Script', cursive;
font-size: 14px;
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
    text-decoration: none;
    padding: 6px;
    font-weight: 500;
    color: var(--mainColor);
  }
`;