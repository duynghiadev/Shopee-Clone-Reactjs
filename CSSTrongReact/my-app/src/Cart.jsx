import React from "react";
import "./cart.scss";

export default function Cart({ isShow }) {
  return (
    <div className="container">
      Cart
      <div className="buttons">
        <div
          className="button-item"
          style={{
            backgroundColor: "yellow",
            display: isShow ? "inline-block" : "none",
          }}
        >
          hello
        </div>
      </div>
    </div>
  );
}
