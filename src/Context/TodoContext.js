
import React, {createContext, useState, useEffect} from "react";

const TodoContext= createContext();

    const TodoProvider = ({children}) =>{
      const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos')
        return storedTodos ? JSON.parse(storedTodos) : [];
      })
    

    useEffect(() =>{
      localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])
     
  
    const addTodo = (todo) => {
        
      setTodos([...todos, todo]);
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const updateTodo = (id, status) => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, status } : todo
      );
      setTodos(updatedTodos);
    };
  
    return (
      <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
        {children}
      </TodoContext.Provider>
    );
  };


export {TodoContext, TodoProvider}
