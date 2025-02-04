import React from "react";
import "./CompletedToDo.scss";

const CompletedToDo = ({ item, deleteCompletedToDo }) => {
  return (
    <div className="completed-card-content">
      <p>{item.todo}</p>
      <div className="completed-card-btns">
        <button
          onClick={() => deleteCompletedToDo(item.id)}
          className="btn delete"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CompletedToDo;
