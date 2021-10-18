import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-3 bg-dark">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/form" className="nav-link text-white">
              Cadsatre-se
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-white">
              Login
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
