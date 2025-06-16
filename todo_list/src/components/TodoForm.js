import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value ? addTodo(value) : setValue("");
        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" name="input-text" placeholder="What is the task today?" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button className={`${value ? "todo-btn" : "todo-btn-disabled"}`} type="submit">Add Task</button>
        </form>
    )
}