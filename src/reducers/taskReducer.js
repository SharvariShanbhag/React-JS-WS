import React from "react";

// const initialState =[]

const taskReducer = (state, action) => {
  //   return {}
  switch (action.type) {
    case "addTask":
    //   const state = [];
      const newtask = {
        id: Date.now(),
        tName: action.payload.taskname,
        tDiscri: action.payload.taskDiscription,
      };
    //   state.push(newTask); //action.payload - object
      return [...state, newtask]; //spead operator for array - destructing shortcut is
    case 'deletetask':
      state.pop();
      return state;
      case 'editTask' :
      return ;
      case 'toggleComplete':
      return;
      default :
  }
};

export default taskReducer;
