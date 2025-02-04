import React from "react";
import "./BottomBar.scss";

const BottomBar = ({ currentCompleted, setCurrentCompleted }) => {
  console.log(currentCompleted);
  return (
    <div className="bottom-bar-container">
      <button
        onClick={() => {
          setCurrentCompleted("current");
        }}
        className={
          currentCompleted === "current"
            ? "bottom-bar-btn current active"
            : "bottom-bar-btn current"
        }
      >
        Current
      </button>
      <button
        onClick={() => {
          setCurrentCompleted("completed");
        }}
        className={
          currentCompleted === "completed"
            ? "bottom-bar-btn completed active"
            : "bottom-bar-btn completed"
        }
      >
        Completed
      </button>
    </div>
  );
};

export default BottomBar;
