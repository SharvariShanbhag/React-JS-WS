import React, { useReducer, createContext, Children } from 'react'
import taskReducer from '../reducers/taskReducer';


const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [
          ...state,
          {
            id: Date.now(),
            tName: action.payload.taskname,
            tDiscri: action.payload.taskDiscription,
          },
        ];
      
      case "DELETE_TASK":
        return state.filter((task) => task.id !== action.payload); 
      
      case "EDIT_TASK":
        return state.map((task) =>
          task.id === action.payload ? { ...task, editing: !task.editing } : task
        );
  
      case "TOGGLE_COMPLETE":
        return state.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
  
      default:
        return state;
    }
  };
  
//   export default taskReducer;
  
// create context
export const TaskContext =createContext();

//provider component
export const TaskProvider =({children}) =>{
    const [state, dispatch] = useReducer(taskReducer, initialState);
     
    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {Children}
        </TaskContext.Provider>
    );
};

export default TaskContext;