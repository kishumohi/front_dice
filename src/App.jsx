import styled from "styled-components";
import "./App.css";
import StartGame from "./components/StartGame.jsx";
import { useState } from "react";
import GamePlayBody from "./components/GamePlayBody.jsx";

function App() {
  const [ontoggle, setontoggle] = useState(true);
  // console.log(ontoggle);
  const ontogglefun = () => {
    setontoggle((prev) => !prev);
  };
  return (
    <div>
      {ontoggle ? <StartGame ontoggle={ontogglefun} /> : <GamePlayBody />}
    </div>
  );
}

export default App;
