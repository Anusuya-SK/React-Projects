import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4">
      <h2>useReducer Hook</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  )
}

export default UseReducerHook

// 🔹 Syntax
// const [state, dispatch] = useReducer(reducer, initialState);
// reducer → a function (state, action) => newState
// initialState → starting state
// state → current state value
// dispatch → function to send actions that update the state