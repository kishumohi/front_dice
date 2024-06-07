import React from "react";
import GamePlayHeader from "./GamePlayHeader.jsx";
import styled from "styled-components";
import DiceRule from "./DiceRule.jsx";

function GamePlayBody() {
  return (
    <>
      <Gamemain>
        <GamePlayHeader />
        <GameplayBody>
          <img src="dice1.png" alt="dice log" width={250} height={250} />
          <p>Click on Dice to roll</p>
          <button>Reset Score</button>
          <button>Show Rules</button>
        </GameplayBody>
        <DiceRule />
      </Gamemain>
    </>
  );
}

export default GamePlayBody;

const Gamemain = styled.div`
  height: 100vh;
  /* background-color: red; */
`;

const GameplayBody = styled.div`
  /* height: 45vh; */
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 24px;
  }
  button {
    width: 250px;
    height: 44px;
    border: 1px solid black;
    padding: 10px 18px;
    border-radius: 5px;
    font-weight: bold;
    background-color: white;
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
