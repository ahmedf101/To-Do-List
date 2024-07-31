import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { Link } from "react-router-dom";

function TodoList() {
  const { todos, deleteTodo, updateStatus } = useContext(TodoContext);

  return (
    <div>
      <h2 className="mb-4">Todo-List</h2>
      <ul className="list-group-mb-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex-justify-content-between align-items-center"
          >
            <Link to={`/todo/${todo.id}`} className="text-decoration-none">
              {todo.text}
            </Link>
            <span className="nadge bg-primary rounded-pill">{todo.status}</span>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-success ms-1"
              onClick={() => updateStatus(todo.id, "Finished")}
            >
              Finished
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
