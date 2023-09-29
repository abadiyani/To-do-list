import { useState } from "react";
import "./styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App(){
  
  const [todos, setTodos] = useState([]); 

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos)=>{
      return currentTodos.filter(todo=> todo.id !== id);
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos)=>{
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed};
        }
        return todo;
      });
    });
  }

  return(
    <>  
      <TodoForm addTodo={addTodo}/>
      <h1 className="header">To do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}