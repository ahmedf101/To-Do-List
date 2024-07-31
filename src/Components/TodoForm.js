import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [inputText, setInputText] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [submittedTodos, setSubmittedTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [nextId, setNextId] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      const newTodo = {
        id: nextId,
        text: inputText,
        description,
        deadline,
        status: "pending",
      };
      addTodo(newTodo);
      setNextId(prevId => prevId +1)
      setSubmittedTodos([...submittedTodos, newTodo]);
      setInputText("");
      setDescription("");
      setDeadline(null);

    }
  };
  function handleTodoClick(todoId) {
    const selectedTodo = submittedTodos.find((todo) => todo.id === todoId);
    if (selectedTodo) {
      setSelectedTodo(selectedTodo);
    }
  }
  if (selectedTodo) {
    return (
      <div>
        <h2>Details Page</h2>
        <p>
          <strong>Name: </strong>
          {selectedTodo.text}{" "}
        </p>
        <p>
          <strong>Description: </strong>
          {selectedTodo.description}{" "}
        </p>
        <p>
          <strong>Deadline: </strong>
          {""}
          {selectedTodo.deadline
            ? selectedTodo.deadline.toLocaleString()
            : "Not Set"}
        </p>
        <button onClick={() => setSelectedTodo(null)}>Back</button>
      </div>
    );
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="inputDescription"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label d-block">DeadLine</label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Deadline"
            isClearable
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      <hr />
      <h4>Submitted List Items</h4>
      <ul>
        {submittedTodos.map((todo) => (
          <li
          className="todo-item"
            key={todo.id}
            onClick={() => handleTodoClick(todo.id)}
            style={{ cursor: "pointer" }}
          >
            <strong>{todo.text}</strong> - {todo.description} - Deadline: {""}
            {todo.deadline ? todo.deadline.toLocaleString() : "Not Set"}
             
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;
