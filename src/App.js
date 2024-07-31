import React from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/ToDoList";
import { TodoProvider } from "./Context/TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoDetail from "./Components/TodoDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <TodoProvider>
      <Router>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-9 col-xl-7">
                <div className="card rounded-3">
                  <div className="card-body p-4">
                    <h4 className="text-center my-3 pb-3">To Do App</h4>
                    <Routes>
                      <Route path="/" element={<TodoForm />} />
                      <Route path="/todos" element={<TodoList />} />
                      <Route path="/todo/:id" element={<TodoDetail />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
    </TodoProvider>
  );
}

export default App;
