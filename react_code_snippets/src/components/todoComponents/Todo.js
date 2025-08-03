import React, { useState } from 'react'
import TodoAdd from './TodoAdd'


function Todo() {
  const[todos, setTodos] = useState([]);

  const todoSubmit = (data) => {
    setTodos([...todos, {text:data, complete:false}]);
  }

  const todoDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  const todoComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    setTodos(updatedTodos);
  }

  return (
    <div>
      <TodoAdd onSubmit={todoSubmit} />
      <ul>
        {todos.map((todo, index) => {
          return (
            <div style={{display:"flex", alignItems: "center"}}>
              <li onClick={() => todoComplete(index)} key={index} style={{textDecoration: todo.complete ? "line-through" : "none", cursor: "pointer"}} >{todo.text}</li>
              <img onClick={() => todoDelete(index)} style={{height: "15px", width:"15px", marginLeft:"5px", cursor: "pointer"}} src="./images/bin.png" alt="Delete" />
            </div>
          )
        })}
      </ul>
      <hr />
    </div>
  )
}

export default Todo