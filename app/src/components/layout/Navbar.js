import React from "react";
import PropTypes from "prop-types";
import "../../App.css";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h3>{title}</h3>
      <ul>
        <li>
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <FaUserCircle />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "School"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
