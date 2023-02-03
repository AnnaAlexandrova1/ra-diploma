import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import HeaderControls from "./HeaderControls/HeaderControls";

import headerLogo from "../../../assets/img/header-logo.png";
import { useDispatch } from "react-redux";
import { shoesCategoryChanged, activeCategoryChanged } from "../../../actions";

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
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
                <li className="nav-item active"
                  onClick={() => {
                    dispatch(shoesCategoryChanged())
                    dispatch(activeCategoryChanged({ name: "all", id: '' }))
                    navigate("/")
                  }}>
                  Главная
                </li>

                <li className="nav-item"
                onClick={() => {
                  dispatch(shoesCategoryChanged())
                  dispatch(activeCategoryChanged({ name: "all", id: '' }))
                    navigate("/catalog")
                  }}>
                 Каталог
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
