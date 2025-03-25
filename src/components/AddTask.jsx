import React, { useState } from "react";

const AddTask = ({ state, dispatch }) => { // ✅ Accept state & dispatch
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) return;
    dispatch({ type: "ADD_TASK", payload: { taskname: taskName, taskDiscription: taskDescription } });
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <>
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

      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((task, index) => (
              <tr key={task.id}>
                <th>{index + 1}</th>
                <td>{task.tName}</td>
                <td>{task.tDiscri}</td>
                <td>
                  <button className="btn btn-success btn-sm" onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })}>
                    Complete
                  </button>
                  <button className="btn btn-dark btn-sm" onClick={() => dispatch({ type: "EDIT_TASK", payload: task.id })}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddTask;
