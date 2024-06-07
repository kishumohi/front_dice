import React from "react";
import styled from "styled-components";

function DiceRule() {
  return (
    <DiceRuleCo>
      <h1>How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice{" "}
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </DiceRuleCo>
  );
}

export default DiceRule;

const DiceRuleCo = styled.div`
  /* height: 30vh; */
  /* background-color: #fbf1f1; */
  padding: 10px;
`;
