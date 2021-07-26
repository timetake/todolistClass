import React from "react";
import ListItem from "./Item";

export default function List({ todos, handleDleteTodo, handleCompleteTodo }) {
  console.log(todos);
  return (
    <div>
      {todos.map((todo, index) => (
        <ListItem
          handleCompleteTodo={handleCompleteTodo}
          handleDleteTodo={handleDleteTodo}
          index={index}
          text={todo.text}
          isComplete={todo.isComplete}
        />
      ))}
    </div>
  );
}
