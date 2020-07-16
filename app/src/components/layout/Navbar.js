import React from "react";
import PropTypes from "prop-types";
import "../../App.css";
import { FaHome, FaUserCircle, FaCalendarAlt, FaStamp } from "react-icons/fa";
const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h3>{title}</h3>
      <ul>
        <li>
          <FaHome />
        </li>
        <li>
          <FaUserCircle />
        </li>
        <li>
          <FaCalendarAlt />
        </li>
        <li>
          <FaStamp />
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
