import React, { useState } from "react";

import CurrentToDo from "../CurrentToDo/CurrentToDo";
import CompletedToDo from "../CompletedToDo/CompletedToDo";

import "./Main.scss";
import { nanoid } from "nanoid";

const Main = ({ currentCompleted }) => {
  const [currentToDosList, setCurrentToDosList] = useState([
    // {
    //   id: 1,
    //   todo: "Wash dishes",
    //   completed: false,
    // },
    // { id: 2, todo: "Feed the cat", completed: false },
  ]);

  const [completedToDosList, setCompletedToDosList] = useState([
    { id: 3, todo: "Mow lawn", completed: true },
  ]);

  const addTodo = (formData) => {
    const newToDo = formData.get("addtodo");
    setCurrentToDosList((prevCurrentToDos) => [
      {
        id: nanoid(),
        todo: newToDo,
        completed: false,
      },
      ...prevCurrentToDos,
    ]);
    console.log(newToDo);
  };
  return (
    <div className="main-container">
      {currentCompleted === "current" && (
        <>
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
          <div className="current-todos-container">
            <h3 className="todos-header">Todos:</h3>
            {currentToDosList.length === 0
              ? "No current tasks"
              : currentToDosList.map((item) => (
                  <CurrentToDo key={item.id} item={item} />
                ))}
          </div>
        </>
      )}

      {currentCompleted === "completed" && (
        <div className="completed-todos-container">
          <h3 className="todos-header">Completed Todos:</h3>
          {completedToDosList.length === 0
            ? "No completed tasks"
            : completedToDosList.map((item) => (
                <CompletedToDo key={item.id} item={item} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Main;
