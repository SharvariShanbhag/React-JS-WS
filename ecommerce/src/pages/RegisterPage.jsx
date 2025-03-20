import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { ThemeContext } from "../hooks/ThemeContext"; // Import theme context
import "./LoginPage.css"; // Reusing the same CSS for consistency

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // Get theme from context

  function handleFormData(event) {
    event.preventDefault();
    const payload = { name, email, password };
    localStorage.setItem("user", JSON.stringify(payload));
    navigate("/login");
  }

  return (
    <div className={`login-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="login-card">
        <h2 className={`login-title ${theme === "dark" ? "dark-title-bg" : "light-title-bg"}`}>
          Create an Account
        </h2>
        <p className="login-subtitle">Please register to get started</p>

        <form onSubmit={handleFormData}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">Register</button>

          <p className="register-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
