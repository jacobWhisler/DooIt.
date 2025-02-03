import React, { useState } from "react";
import "./Main.scss";

const Main = ({ currentCompleted }) => {
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
        <div className="todos-container">
          <h4 class="todo-header">Todos:</h4>
        </div>
      )}
      {currentCompleted === "completed" && (
        <div className="completed-todos-container">
          <h4 class="todo-header">Completed Todos:</h4>
        </div>
      )}
    </div>
  );
};

export default Main;
