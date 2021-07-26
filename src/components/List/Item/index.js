import React from "react";

export default function ListItem({
  index,
  isComplete,
  text,
  handleDleteTodo,
  handleCompleteTodo,
}) {
  return (
    <div className={isComplete ? "completed" : ""}>
      <button onClick={() => handleCompleteTodo(index)}>Complete</button>
      <span>{text}</span>
      <button onClick={() => handleDleteTodo(index)}>X</button>
    </div>
  );
}
