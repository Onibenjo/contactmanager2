import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav
        className="navbar sticky-top navbar-expand-sm navbar-dark
    bg-primary mb-3 py-0"
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto right">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact/add" className="nav-link">
                  <i className="fas fa-plus" /> Add
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  <i className="fas fa-question" /> About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
