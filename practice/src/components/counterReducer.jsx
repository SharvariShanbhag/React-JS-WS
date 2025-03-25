import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return state.count > 0 ? { ...state, count: state.count - 1 } : state; // Prevents going below 0
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {state.count}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          style={{ padding: "10px", backgroundColor: "blue", color: "white", borderRadius: "5px" }}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          style={{ padding: "10px", backgroundColor: "red", color: "white", borderRadius: "5px" }}
          onClick={() => dispatch({ type: "DECREMENT" })}
          disabled={state.count === 0} // Disable if count is 0
        >
          Decrement
        </button>
        <button
          style={{ padding: "10px", backgroundColor: "gray", color: "white", borderRadius: "5px" }}
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
