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
      return state.filter((task) => task.id !== action.payload); // ✅ Correct deletion logic
    
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

export default taskReducer;
