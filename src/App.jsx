import React, { useReducer } from "react"; 
import AddTask from "./components/AddTask";
import taskReducer from "./reducers/taskReducer"; 

const initialState = []; 

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState); 

  return (
    <>
      <AddTask state={state} dispatch={dispatch} /> 
    </>
  );
}

export default App;
