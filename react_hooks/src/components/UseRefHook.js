import React, { useRef, useState } from 'react'

function UseRefHook() {
    const inputEmailRef = useRef(null); // Step 1: Create a ref

    const handleClick = () => {
        // Step 3: Use ref to focus the input
        inputEmailRef.current.value = 'test';
    }

  return (
    <div>
        {/* Step 2: Attach ref to input */}
        <input ref={inputEmailRef} type='email' placeholder='Enter Email'/>
        <button onClick={handleClick}>Focus Email Field</button>
    </div>
  )
}

export default UseRefHook