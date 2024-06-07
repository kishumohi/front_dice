import styled from "styled-components";
import NumberBox from "./NumberBox.jsx";
import { useState } from "react";

function GamePlayHeader() {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const [selectNum, setSelectNum] = useState();

  return (
    <Config className="config">
      <Score className="scored">
        <h1>{selectNum}</h1>
        <p>TOTAL SCORE</p>
      </Score>
      <DiceSelector>
        <h4>You have not selected any number</h4>
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
  );
}

export default GamePlayHeader;

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
