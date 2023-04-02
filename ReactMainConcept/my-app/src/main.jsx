import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Welcome from "./Welcome";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <App />
      <Welcome name="Duynghiadev" age="20" />
      <Welcome name="Duynghiadev" age="21" />
      <Welcome name="Duynghiadev" age="22" />
    </div>
  </React.StrictMode>
);
