import React, { useState } from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.prevetDeafault();
        console.log(value);
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" name="input-text" placeholder="What is the task today?" onChange={(e) => setValue(e.target.value)}></input>
            <button className="todo-btn" type="submit">Add Task</button>
        </form>
    )
}