import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <header className="navHeader">
      <nav className="navBar">
        <div className="navLogo">UR</div>
        <ul className="navList">
          <li className="navItem">
            <Link className="navLink" to="/home">Home</Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/view">View</Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/login">Login</Link>
          </li>
          {/* <li className="navItem">
            <Link className="navLink" to="/register">Register</Link>
          </li> */}
          <li className="navItem">
            <Link className="navLink" to="/account">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
