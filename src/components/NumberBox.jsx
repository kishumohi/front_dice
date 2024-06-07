import { useEffect, useState } from "react";
import styled from "styled-components";

function NumberBox({ number, getNum }) {
  return (
    <NumberBxt>
      {number === getNum ? (
        <SeleNumberBxt>
          <h1>{getNum}</h1>
        </SeleNumberBxt>
      ) : (
        <h1>{number}</h1>
      )}
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
  display: grid;
  place-items: center;
  font-size: 24px;
  justify-content: center;
  font-weight: 700;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const SeleNumberBxt = styled.div`
  /* background-color: red; */
  /* border: none; */
  /* border: 5px solid transparent; */

  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  justify-content: center;
  font-weight: 700;
  border: 1px solid black;
  background-color: black;
  color: white;
  &:hover {
    background-color: black;
    color: white;
  }
`;
