import React from "react";
import "./ToDoListItem.css"

function ToDoListItem({ todo, index }) {
  return (

      <li className="ToDoListItem" 
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum"
      }}
      >
        <div className="Number">
          {index + 1}
        </div>
        <div className="Name">
          {todo}
        </div>
      </li>

  );
}

export default ToDoListItem;
