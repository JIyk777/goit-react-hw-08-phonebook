import styled from 'styled-components';

export const FormAddBtn = styled.button`
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
export const FormInput = styled.input`
  border-radius: 20px;
  padding: 5px 20px;
`;
export const FormLabelText = styled.span`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
