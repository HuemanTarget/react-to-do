import React from "react";
import ToDoListItem from "./ToDoListItem";
import './ToDoList.css'

function ToDoList({ todos }) {

  return (
    <div>
      <ul className="ToDoList">
        {todos.map((t, i) => <ToDoListItem todo={t} key={i} index={i} />)}
      </ul>
    </div>
  );
}

export default ToDoList;
