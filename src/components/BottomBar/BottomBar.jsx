import React from "react";
import "./BottomBar.scss";

const BottomBar = ({ setCurrentCompleted }) => {
  return (
    <div className="bottom-bar-container">
      <button
        onClick={() => {
          setCurrentCompleted("current");
        }}
        className="bottom-bar-btn current"
      >
        Current
      </button>
      <button
        onClick={() => {
          setCurrentCompleted("completed");
        }}
        className="bottom-bar-btn completed"
      >
        Completed
      </button>
    </div>
  );
};

export default BottomBar;
