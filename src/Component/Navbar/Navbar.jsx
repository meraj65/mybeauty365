import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/Navbar.css";
import logo from "../../assets/images/favicon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className="navbar p-0">
      <ul className="nav-ul">
        <NavLink className="navbar-brand nav-hv" to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <NavLink className="navbar-brand dark nav-hv me-5" to="/skinquiz">
          SKIN QUIZ
        </NavLink>
        <NavLink className="navbar-brand dark nav-hv me-5" to="/blog">
          THE BLOG
        </NavLink>
        <NavLink className="navbar-brand dark nav-hv me-5" to="/category">
          SHOP BY CATEGORY
        </NavLink>
      </ul>
      <ul>
        <NavLink className="navbar-brand dark nav-hv " to="/login">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
