import React from "react";
import { NavLink } from 'react-router-dom';
import HeaderControls from "./HeaderControls/HeaderControls";
import "./header.css";
import headerLogo from "../../../assets/img/header-logo.png";

export default function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink to="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to="/">Главная</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/catalog">Каталог</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/about">О магазине</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/contacts">Контакты</NavLink>
                </li>
              </ul>

              <div>
                <HeaderControls />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
