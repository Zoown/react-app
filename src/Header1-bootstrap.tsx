import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "170px", height: "60px", paddingLeft: "10px" }}
        />
      </a>

      {/* Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/apartments">
              Apartments
            </a>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <form className="form-inline my-2 my-lg-0 d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Header;
