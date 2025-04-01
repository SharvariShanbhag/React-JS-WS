import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), title, description, completed: false },
      });
      navigate("/");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center">Add Task</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>
  );
}
