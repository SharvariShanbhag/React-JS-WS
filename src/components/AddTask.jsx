import React, { useState } from "react";

const AddTask = ({ state, dispatch }) => { 
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) return;
    dispatch({ type: "ADD_TASK", payload: { taskname: taskName, taskDiscription: taskDescription } });
    setTaskName("");
    setTaskDescription("");
  };

  return(
    <div className="container mt-4">
            <form onSubmit={handleAddTask}>
              <div className="mb-3">
                <label htmlFor="taskName" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="taskDesc" className="form-label">
                  Task Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Task
              </button>
            </form>
          </div>
  )
  
};




export default AddTask;
