import styled from "styled-components";
import "./App.css";
import StartGame from "./components/StartGame.jsx";

const Button = styled.button`
  background-color: red;
`;

function App() {
  return (
    <div>
      <StartGame />
    </div>
  );
}

export default App;
