import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";
import CatalogCategories from "./CatalogCategories";
import CatalogList from "./CatalogList";
import * as actionsPayload from '../../actions/actionsPayload'


import "./catalog.css";

import { useDispatch, useSelector } from "react-redux";


export default function Catalog() {
  
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const {isSearch, params } = useSelector(state => state.serviceCatalog)
  const fetchAPI = new fetchApi()

  // const onSearch = (evt) => {
  //   setSearchValue(searchValue => evt.target.value)
  //   fetchAPI.search(evt.target.value).then(searchResult).catch(onError)
  // }
 
  // const searchResult = (char) => {
  //    console.log(char)
  //  }

  // const onError = () => {
  //    setError(true)
  // }
  
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline"
        >
        <input className="form-control" placeholder="Поиск"
          onChange={(evt) => {console.log(evt.target.value)
            dispatch(actionsPayload.inputSearch(evt.target.value))
          }
          }
          value={params.searchText}
        />
      </form>
      <CatalogCategories />
      <CatalogList />
    </section>
  );
}
