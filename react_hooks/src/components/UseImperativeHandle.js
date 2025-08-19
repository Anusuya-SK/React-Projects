import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

//   Without useImperativeHandle, if parent attaches a ref, it only gets the <input> DOM node. 
//   But with it, you can expose custom methods like focusInput.
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    }
  }));

  return <input ref={inputRef} placeholder="Type something..." />;
});

function UseImperativeHandle() {
    const inputRef = useRef();
  return (
    <div>
      <h2>UseImperativeHandle Hook</h2>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  )
}

export default UseImperativeHandle

// Syntax
// useImperativeHandle(ref, createHandle, [deps])
// ref: the ref object forwarded from parent
// createHandle: function that returns an object containing the values/functions you want to expose
// [deps]: optional dependency array (like useEffect) to control when to update the exposed handle

// inputRef = “real wire” connected to the bulb (DOM).
// ref from parent = “remote control” that only sees the switches (focus, clear) you choose to expose.

// 🔹 When to use forwardRef?
// When a parent needs to access child DOM nodes (like input, video, canvas, etc.).
// When creating reusable UI libraries (e.g., custom Button, Input, Modal).
// In combination with useImperativeHandle to expose custom APIs.

// ⚡ Think of it like this:
// ref = way to hold DOM node or imperative API
// forwardRef = lets parent give its ref to child’s DOM
// useImperativeHandle = customizes what parent sees through that ref