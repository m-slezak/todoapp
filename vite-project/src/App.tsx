import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input type="text" className="input" />
      <buton>add</buton>
    </div>
  );
}

export default App;
