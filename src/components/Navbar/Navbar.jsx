import React from "react";
import { useState } from "react";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="nav">
      <div>
        <button
          className="nav__hamburger"
          onClick={() => setNavExpanded(!navExpanded)}
        >
          <Hamburger />
        </button>
      </div>
      <div className="nav__brand-logo">
        <Link to="/">GIFT-IT</Link>
      </div>
      <div className={navExpanded ? "nav__menu expanded" : "nav__menu"}>
        <Link to="/registry">Registry</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav__user-menu">
        {localStorage.getItem("user") ? (
          <>
            <Link to="/">
              Hi, {JSON.parse(localStorage.getItem("user"))["name"]}
            </Link>
            |
            <Link to="/" onClick={logout}>
              Sign out
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Join Us</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
