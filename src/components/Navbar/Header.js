import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  width: "112px";
  height: "28px";
`;

const NavLink = styled.a``;
const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" href="https://bulma.io">
          <Logo src="https://bulma.io/images/bulma-logo.png" />
        </NavLink>

        <NavLink
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </NavLink>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item">Home</NavLink>

          <NavLink className="navbar-item">Documentation</NavLink>

          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink className="navbar-link">More</NavLink>

            <div className="navbar-dropdown">
              <NavLink className="navbar-item">About</NavLink>
              <NavLink className="navbar-item">Jobs</NavLink>
              <NavLink className="navbar-item">Contact</NavLink>
              <hr className="navbar-divider" />
              <NavLink className="navbar-item">Report an issue</NavLink>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink className="button is-primary">
                <strong>Sign up</strong>
              </NavLink>
              <NavLink className="button is-light">Log in</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
