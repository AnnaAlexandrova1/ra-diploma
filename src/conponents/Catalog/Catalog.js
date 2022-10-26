import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";
import CatalogCategories from "./CatalogCategories";
import CatalogList from "./CatalogList";

import "./catalog.css";

import { useDispatch, useSelector } from "react-redux";


export default function Catalog() {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)

  const fetchAPI = new fetchApi()

  const onSearch = (evt) => {
    setSearchValue(searchValue => evt.target.value)
    fetchAPI.search(evt.target.value).then(searchResult).catch(onError)
  }
 
  const searchResult = (char) => {
     console.log(char)
   }

  const onError = () => {
     setError(true)
  }
  
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline"
        >
        <input className="form-control" placeholder="Поиск"
          onChange={onSearch}
          value={searchValue}
        />
      </form>
      <CatalogCategories />
      <CatalogList />
    </section>
  );
}
