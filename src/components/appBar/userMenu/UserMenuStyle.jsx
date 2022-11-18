import styled from 'styled-components';

export const UserMenuBtn = styled.button`
  padding: 5px;
  border-radius: 30px;
  width: 50px;
  border: 0;
  background-color: #ffd700;
  cursor: pointer;
  &:hover,
  &focus {
    background-color: #ffff00;
  }
  margin: 0;
`;

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
