import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center">To-Do Application</h2>
        <Routes>
          <Route path="/" element={<ListTask />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}
