import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BsPlusSquare } from "react-icons/bs";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input type="text" className="input" />
      <button>
        <BsPlusSquare />
      </button>
    </div>
  );
}

export default App;
