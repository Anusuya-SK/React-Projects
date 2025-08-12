import React, { useRef, useState, useEffect } from 'react'

function UseRefHook() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(); // prevCount = { current: undefined }
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Direct DOM manipulation
    inputRef.current.value = "test";
  };

  // After the first render, it stores the current count (0) in prevCount.current.
  // This happens after the render. So initially show undefined, then 0, then 1
  useEffect(() => {
    prevCount.current = count; // Store current value for next render
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefHook