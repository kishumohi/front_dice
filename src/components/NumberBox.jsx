import React from "react";
import styled from "styled-components";

function NumberBox({ number }) {
  return (
    <NumberBxt>
      <h1>{number}</h1>
    </NumberBxt>
  );
}

export default NumberBox;

const NumberBxt = styled.div`
  /* background-color: red; */
  /* border: none; */
  /* border: 5px solid transparent; */

  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
