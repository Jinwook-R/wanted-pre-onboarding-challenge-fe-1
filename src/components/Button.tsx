import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  height: 32px;
  background-color: black;
  border: none;
  outline: none;
  color: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 6px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #111;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }
`;

export default Button;
