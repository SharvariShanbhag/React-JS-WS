import React, { useReducer } from "react";
import AddTask from "./components/AddTask";
import taskReducer from "./reducers/taskReducer";

const initialState = [];

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">Task Manager</h1>
      <AddTask dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
