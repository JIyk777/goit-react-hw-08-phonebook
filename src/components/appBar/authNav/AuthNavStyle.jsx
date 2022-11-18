import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthNavLinkStyle = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    color: #2e8b57;
  }
  padding: 2px;
  border-radius: 30px;
  margin-top: 16px;
  border: 0;
  background-color: #ffd700;
  cursor: pointer;
  &:hover,
  &focus {
    background-color: #ffff00;
  }
  margin: 0;
`;

export const AuthNavBoxStyle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 0;
`;
