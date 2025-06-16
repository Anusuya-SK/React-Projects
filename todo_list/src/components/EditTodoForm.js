import React, { useState } from 'react'

export const EditTodoForm = ({task, editTask}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        value ? editTask(value, task.id) : setValue("");
        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" name="input-text" placeholder="Update Task" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button className={`${value ? "todo-btn" : "todo-btn-disabled"}`} type="submit">Update Task</button>
        </form>
    )
}