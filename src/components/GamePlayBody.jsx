import React, { useState } from "react";

import styled from "styled-components";
import DiceRule from "./DiceRule.jsx";
import NumberBox from "./NumberBox.jsx";

function GamePlayBody() {
  const [randomNom, setrandomNom] = useState(1);
  const [showrule, setShowrule] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const [selectNum, setSelectNum] = useState(0);
  const [count, setCount] = useState(0);
  // console.log(count);
  const scoreUpdateHandler = (rmd) => {
    setrandomNom(rmd);
    if (selectNum > 0) {
      // setrandomNom(randomNumm);
      if (rmd === selectNum) {
        setError(false);
        return setCount((prev) => prev + selectNum);
      } else {
        setError(false);
        return setCount((prev) => prev - 2);
      }
    } else {
      setError(true);
    }
  };
  const RandomNumber = (min, max) => {
    {
      let numberis = Math.floor(Math.random() * (max - min + 1) + min);
      return numberis;
    }
  };

  const showruleHandler = () => {
    setShowrule((prev) => !prev);
  };
  return (
    <>
      <Gamemain>
        <Config className="config">
          <Score className="scored">
            <h1>{count}</h1>
            <button onClick={scoreUpdateHandler}>Play Now</button>
            <p>TOTAL SCORE</p>
          </Score>
          <DiceSelector>
            {error ? <h4>You have not selected any number</h4> : ""}
            <div>
              {arrayNumber.map((value, i) => (
                <h1 key={i} onClick={() => setSelectNum(value)}>
                  <NumberBox number={value} getNum={selectNum} />
                </h1>
              ))}

              {/* <NumberBox number="2" />
          <NumberBox number="3" />
          <NumberBox number="4" />
          <NumberBox number="5" />
          <NumberBox number="6" /> */}
            </div>
            <p>Select Number</p>
          </DiceSelector>
        </Config>
        <GameplayBody>
          <img
            src={`dice_${randomNom}.png`}
            alt="dice log"
            width={250}
            height={250}
            onClick={() => scoreUpdateHandler(RandomNumber(1, 6))}
          />
          <p>Click on Dice to roll</p>
          <button>Reset Score</button>
          <button onClick={showruleHandler}>Show Rules</button>
        </GameplayBody>

        {showrule ? <DiceRule /> : <></>}
      </Gamemain>
    </>
  );
}

export default GamePlayBody;

const Gamemain = styled.div`
  height: 100vh;
  /* position: fixed; */
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

const Config = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  /* height: 20vh; */
`;
const Score = styled.div`
  height: 115px;
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
  h4 {
    font-weight: normal;
    color: red;
  }
`;
