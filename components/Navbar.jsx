import { useNavigate } from "react-router-dom";
import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <h2>Logo.com</h2>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
