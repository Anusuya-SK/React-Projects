import React, { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }
  return (
    <div>
        <h2>Counter Project</h2>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <hr />
    </div>
  )
}

export default Counter