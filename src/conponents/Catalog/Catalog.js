import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";
import CatalogCategories from "./CatalogCategories";
import CatalogList from "./CatalogList";

import "./catalog.css";


export default function Catalog() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>
      <CatalogCategories />
      <CatalogList />
    </section>
  );
}
