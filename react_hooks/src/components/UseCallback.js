import React, { useState, useCallback, memo } from "react";

// In React, memo is a higher-order component (HOC) that helps you skip re-rendering a component if its props haven’t changed.
const Counter = memo(function Counter({ onIncrement }) {
    console.log("Child renderd");
    return <button onClick={onIncrement}>Increment</button>
})

function UseCallback() {
    const[count, setCount] = useState(0);
    const increase = useCallback(() => {
        setCount(c => c + 1);
    }, []); // dependencies array
  return (
    <>
    <p>Count: {count}</p>
    <Counter onIncrement={increase} />
    </>
  )
}

export default UseCallback

// useCallback → memoizes a function so that it has a stable reference between renders, useful when passing that function to child components to prevent unnecessary re-renders.
// useEffect → runs side effects after render (like fetching data, subscribing, logging, etc.), not for creating reusable event handlers.
// useEffect is only used here if you want count to change automatically in response to some other state or prop change, not for a button click.
// useEffect(() => {
//   setCount(c => c + 1);
// }, [count]);
// Inside useEffect, you call setCount → this changes count again.
// Because count changed, useEffect runs again.