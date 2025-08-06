import React, { useEffect, useState } from 'react'

function UseStateUseEffectHook() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        if(count >= 50) return;

        const timeout = setTimeout(() => {
          setCount(prev => prev + 1);
        }, 100);

        return() => clearTimeout(timeout); //cleanup
    },[count]); // Dependency array

  return (
    <div>
        <p>Count: {count}</p>
    </div>
  )
}

export default  UseStateUseEffectHook