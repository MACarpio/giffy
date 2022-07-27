import React from "react";
import { Link } from "wouter";
import logo from "../../../Assets/Logo-w.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <Link to="/">
          <a href="" className="Navbar-logo">
            <img src={logo} alt="" srcset="" /> Giffy
          </a>
        </Link>
        <ul>
          <Link to="/Search ">
            <li>
              <a href="">Buscar</a>
            </li>
          </Link>
          <Link to="/fav">
            <li>
              <a href="">Favorito</a>
            </li>
          </Link>
        </ul>
      </nav>
      <div className="Navbar-box"></div>
    </>
  );
}
