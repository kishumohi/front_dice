import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  /* margin: 0 auto; */
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;

    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

function StartGame({ ontoggle }) {
  return (
    <Container>
      <div>
        <img src="dice_logo.png" alt="dice log" width={645} height={522} />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={ontoggle}>Play Game</Button>
      </div>
    </Container>
  );
}

export default StartGame;
