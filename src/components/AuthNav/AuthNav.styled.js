import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkAuth = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--mainColor);

  &.active {
    color: var(--accentColor);
  }

  &:hover {
    color: var(--semiAccentColor);
  }
`;

