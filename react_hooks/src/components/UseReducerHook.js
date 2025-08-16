import React from 'react'

function UseReducerHook() {
  return (
    <div>UseReducerHook</div>
  )
}

export default UseReducerHook

// 🔹 Syntax
// const [state, dispatch] = useReducer(reducer, initialState);
// reducer → a function (state, action) => newState
// initialState → starting state
// state → current state value
// dispatch → function to send actions that update the state