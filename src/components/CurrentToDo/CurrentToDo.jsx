import React from "react";
import "./CurrentToDo.scss";

const CurrentToDo = ({ item }) => {
  return (
    <div className="current-card-content">
      <p>{item.todo}</p>
      <div className="current-card-btns">
        <button className="btn delete">
          <i className="fas fa-trash"></i>
        </button>
        <button className="btn complete">
          <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default CurrentToDo;
