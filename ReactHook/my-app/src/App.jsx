import { useState } from "react";
import "./App.css";
import User from "./User";
import UserClassComponent from "./User.class";
import RuleOfHook from "./ruleOfHook";
import AutoBatching from "./AutoBatching";
import Cart from "./Header/Cart";
import Navigation from "./Header/Navigation";

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      {/* <UserClassComponent /> */}
      {/* {isShow && <User />}

      <button onClick={() => setIsShow((prevState) => !prevState)}>
        Change isShow
      </button> */}
      {/* <RuleOfHook /> */}
      {/* <AutoBatching /> */}

      <Cart />
      <Navigation />
    </div>
  );
}

export default App;
