import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="navHeader">
      <nav className="navBar">
        <div className="navLogo">UR</div>
        <ul className="navList">
          <Auth>
            <li className="navItem">
              <Link className="navLink" to="/home">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/view">
                View
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/account">
                Account
              </Link>
            </li>
          </Auth>
          {/* <Guest>
          <li className="navItem">
            <Link className="navLink" to="/login">
              Login
            </Link>
          </li>
          </Guest> */}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
