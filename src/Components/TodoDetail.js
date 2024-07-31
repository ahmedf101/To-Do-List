import React from "react";
import { useLocation } from "react-router-dom";

function TodoDetail() {
  const location = useLocation();
  const { todo } = location.state;

  return (
    <div>
      <h2>{todo.text}</h2>
      <p>Description: {todo.description}</p>
      <p>
        Deadline: {todo.deadline ? todo.deadline.toLocaleString() : "Not Set"}
      </p>
    </div>
  );
}

export default TodoDetail;
