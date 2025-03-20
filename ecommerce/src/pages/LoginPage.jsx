import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; 
import { ThemeContext } from "../hooks/ThemeContext"; 
import "./LoginPage.css"; 

const LoginPage = ({ setIsLoggedIn, setLoggedUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); 

  function handleLogin(event) {
    event.preventDefault();
    setError(""); 
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsLoggedIn(true);
      setLoggedUser(email);
      navigate("/home");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className={`login-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="login-card">
        <h2 className={`login-title ${theme === "dark" ? "dark-title-bg" : "light-title-bg"}`}>
          Welcome Back
        </h2>
        <p className="login-subtitle">Please login to continue</p>
        
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaUser className="icon" />
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

          <button type="submit" className="btn btn-success">Login</button>

          <p className="register-link">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
