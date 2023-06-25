import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <header className="sticky-top  bg-opacity-10">
      <nav className="navbar  navbar-expand-sm">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/" id="logo">
            VEM
          </Link>
          <button
            className="navbar-toggler  shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div
            className="offcanvas offcanvas-start"
            // tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ms-auto">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body flex" id="navbarNav">
              <ul
                className="navbar-nav justify-content-end m-auto"
                id="linksHolder"
              >
                <li className="nav-item">
                  <NavLink className="nav-link " to="/" end>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/Projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                  </li>
              </ul>
              <Link href="#" target="_blank" className="btn text-light fs-6 ">
                GEAST
                </Link>
              <span className="nav-item dropdown">
                <a className="nav-link nav-icon-hover" href="http" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img src={require("../assets/user.jpg")} alt="user" width="35" height="35" className="rounded-circle"/>
                </a>
                </span>
              {/* <Link className="btn btn-outline-primary" to="/Signin">
                Sign in
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
