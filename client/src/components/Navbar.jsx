import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Star Wars Info
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/search"
                activeClassName="active"
                onClick={handleClick}
                input="text"
              >
                <input type="text" placeholder="Search"/>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/people"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                People
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/planets"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Planets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/starships"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Starships
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
