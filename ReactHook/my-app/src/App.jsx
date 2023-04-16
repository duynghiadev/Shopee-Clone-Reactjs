import { useState } from "react";
import "./App.css";
import User from "./User";
import UserClassComponent from "./User.class";

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      {/* <UserClassComponent /> */}
      {isShow && <User />}

      <button onClick={() => setIsShow((prevState) => !prevState)}>
        Change isShow
      </button>
    </div>
  );
}

export default App;
