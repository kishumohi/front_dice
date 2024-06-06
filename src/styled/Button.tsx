import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  height: 44px;
  width: 220px;
  border: none;
  border-radius: 5px;
  padding: 10px 18px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
