import React from "react";
import styled from "styled-components";
import NumberBox from "./NumberBox.jsx";

function GamePlayHeader() {
  return (
    <Config className="config">
      <Score className="scored">
        <h1>0</h1>
        <p>TOTAL SCORE</p>
      </Score>
      <DiceSelector>
        <div>
          <NumberBox number="1" />
          <NumberBox number="2" />
          <NumberBox number="3" />
          <NumberBox number="4" />
          <NumberBox number="5" />
          <NumberBox number="6" />
        </div>
        <p>Select Number</p>
      </DiceSelector>
    </Config>
  );
}

export default GamePlayHeader;

const Config = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 20vh;
`;
const Score = styled.div`
  height: 151px;
  width: 135px;

  /* max-width: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 85px;
  }
  p {
    font-weight: bold;
  }
`;

const DiceSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  div {
    display: flex;
    gap: 24px;
  }
  p {
    margin: 20px 0px;
    font-weight: bold;
    /* background-color: green; */
  }
`;
