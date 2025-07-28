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
        <h2>{count}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter