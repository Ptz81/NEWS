import styled from "styled-components";
import { Button } from 'react-bootstrap';


export const StatusButton = styled(Button)`
border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  border: 1px solid var(--accentColor);
  border-radius: 4px;
  padding: 6px 10px;
  background-color: #fff;
  color: var(--accentColor);

  &:hover,
  &:focus {
    border: 1px solid var(--accentColor);
    background-color: var(--semiAccentColor);
    color: #fff;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
