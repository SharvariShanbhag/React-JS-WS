import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage.jsx";
import MainNavbar from "./components/MainNavbar.jsx";
import data from "./data.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CardDetail from "./components/CardDetail.jsx";
import ThemeProvider from "./hooks/ThemeContext.jsx";

function App() {
  // ✅ Use `JSON.parse` for boolean localStorage values
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  const [loggedUser, setLoggedUser] = useState(() => {
    return localStorage.getItem("loggedUser") || "";
  });

  // ✅ Persist login state in localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("loggedUser", loggedUser);
  }, [isLoggedIn, loggedUser]);

  console.log("isLoggedIn on App.js", isLoggedIn);
  console.log("loggedUser on App.js", loggedUser);

  return (
    <ThemeProvider>
    <Router>
      <MainNavbar />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage data={data} /> : <Navigate to="/login" />}
        />
        <Route path="/card-detail/:id" element={<CardDetail />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
