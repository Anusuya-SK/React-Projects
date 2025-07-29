import React, { useState } from 'react'

function TodoAdd({ onSubmit }) {
    const[input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
        setInput("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter a Todo' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' disabled={!input.trim()}>Submit</button>
        </form>
    </div>
  )
}

export default TodoAdd