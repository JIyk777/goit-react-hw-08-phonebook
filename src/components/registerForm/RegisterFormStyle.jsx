import styled from 'styled-components';

export const RegisterFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  text-align: center;
`;

export const RegisterFormLabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const RegisterFormBtn = styled.button`
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
`;
