import React, { useState } from "react";

import CurrentToDo from "../CurrentToDo/CurrentToDo";
import CompletedToDo from "../CompletedToDo/CompletedToDo";

import "./Main.scss";

const Main = ({ currentCompleted }) => {
  const [currentToDosList, setCurrentToDosList] = useState([
    {
      id: 1,
      todo: "Wash dishes",
      completed: false,
    },
    { id: 2, todo: "Feed the cat", completed: false },
  ]);

  const [completedToDosList, setCompletedToDosList] = useState([
    { id: 3, todo: "Mow lawn", completed: true },
  ]);

  const addTodo = () => {
    console.log("add todo");
  };
  return (
    <div className="main-container">
      <p className="main-text">Enter your to-do tasks below!</p>
      <div className="form-container">
        <form action={addTodo}>
          <input
            type="text"
            placeholder="e.g. Take out the trash"
            aria-label="Add Todo"
            name="addtodo"
          />
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
      {currentCompleted === "current" && (
        <div className="current-todos-container">
          <h3 className="todos-header">Todos:</h3>
          {currentToDosList.map((item) => (
            <CurrentToDo item={item} />
          ))}
        </div>
      )}
      {currentCompleted === "completed" && (
        <div className="completed-todos-container">
          <h3 className="todos-header">Completed Todos:</h3>
          {completedToDosList.map((item) => (
            <CompletedToDo item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
