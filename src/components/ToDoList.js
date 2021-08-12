import React from "react";
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
  return (
    <div>
      <ul>
        <ToDoListItem />
        <ToDoListItem />
      </ul>
    </div>
  );
}

export default ToDoList;
