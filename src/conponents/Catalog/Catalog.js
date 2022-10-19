import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";

import "./catalog.css";
import CatalogList from "./CatalogList";

export default function Catalog() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Все
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Женская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Мужская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Обувь унисекс
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Детская обувь
          </a>
        </li>
      </ul>
      <CatalogList />
    </section>
  );
}
