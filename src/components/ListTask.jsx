import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

export default function ListTask() {
  const { state, dispatch } = useContext(TaskContext);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Task List</h3>
        <Link to="/add" className="btn btn-success">
          + Add Task
        </Link>
      </div>
      <ul className="list-group mt-3">
        {state.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center shadow-sm rounded ${
              task.completed ? "bg-success text-white" : ""
            }`}
          >
            <div>
              <h5 className={task.completed ? "text-decoration-line-through" : ""}>
                {task.title}
              </h5>
              <p>{task.description}</p>
            </div>
            <div>
              <button
                className="btn btn-outline-primary btn-sm me-2"
                onClick={() =>
                  dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
                }
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() =>
                  dispatch({
                    type: "EDIT_TASK",
                    payload: {
                      ...task,
                      title: prompt("Edit Title:", task.title) || task.title,
                    },
                  })
                }
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
