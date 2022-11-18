import styled from 'styled-components';

export const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  text-align: center;
`;

export const LoginFormLabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const LoginFormBtn = styled.button`
  padding: 10px;
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
