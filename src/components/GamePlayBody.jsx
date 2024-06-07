import React from "react";
import GamePlayHeader from "./GamePlayHeader.jsx";
import styled from "styled-components";

function GamePlayBody() {
  return (
    <>
      <GamePlayHeader />
      <GameplayBody>
        <img src="dice1.png" alt="dice log" width={250} height={250} />
        <p>Click on Dice to roll</p>
        <button>Reset Score</button>
        <button>Show Rules</button>
      </GameplayBody>
    </>
  );
}

export default GamePlayBody;

const GameplayBody = styled.div`
  height: 75vh;
  display: flex;
  gap: 15px;
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
