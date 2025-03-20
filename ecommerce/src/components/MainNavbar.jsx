import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi"; 
import { ThemeContext } from "../hooks/ThemeContext";

const MainNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`} style={{ position: "sticky", top: 0, width: "100%", zIndex: 1000 }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF-aCUkLDXY1rRx2sbsL6BgZoi1Yizv1Ifg&s" alt="fruitmart logo" height="70" width={140} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item" style={{ fontSize: "30px", cursor: "pointer" }}>
              <button onClick={toggleTheme} style={{ background: "none", border: "none" }}>
                {theme === "light" ? <BiToggleLeft /> : <BiToggleRight />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
