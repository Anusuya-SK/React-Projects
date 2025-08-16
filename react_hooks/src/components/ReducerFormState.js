import React, { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  };
}

function ReducerFormState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  };

  return (
    <form>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <p>{JSON.stringify(state)}</p>
    </form>
  );
}

export default ReducerFormState
