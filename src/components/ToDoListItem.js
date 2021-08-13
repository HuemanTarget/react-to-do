import React from "react";
import "./ToDoListItem.css"

function ToDoListItem({ todo, index }) {
  return (

      <li className="ToDoListItem">
        <div className="Name">
          {todo.name}
        </div>
        <div className="Level">
          Level {todo.level}
        </div>
      </li>

  );
}

export default ToDoListItem;
