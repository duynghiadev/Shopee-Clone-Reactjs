import { useState } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  const [name, setName] = useState("Casio");
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setName("Apple")}>Change Name</button>
      <button onClick={() => setVisible(false)}>Hide Clock component</button>

      {visible && <Clock name={name} />}
    </div>
  );
}

export default App;
