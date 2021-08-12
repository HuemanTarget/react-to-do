import React from "react";
import ToDoListItem from "./ToDoListItem";

function ToDoList({ todos }) {

  return (
    <div>
      <ul>
        {todos.map((t, i) => <ToDoListItem todo={todos} key={i} />)}
      </ul>
    </div>
  );
}

export default ToDoList;
