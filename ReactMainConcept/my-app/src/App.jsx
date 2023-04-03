// import { useState } from "react";
import "./App.css";
import BareInput from "./BareInput";
import Layout from "./Layout";
// import Clock from "./Clock";

function App() {
  // const [name, setName] = useState("Casio");
  // const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      {/* <button onClick={() => setName("Apple")}>Change Name</button>
      <button onClick={() => setVisible(false)}>Hide Clock component</button>

      {visible && <Clock name={name} />} */}

      <Layout>
        <h1>Hello</h1>

        <BareInput
          type="text"
          value="100"
          autoFocus={true}
          className="input-control"
          onChange={() => {}}
        />
      </Layout>
    </div>
  );
}

export default App;
