
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CatalogCategories from "./CatalogCategories";
import CatalogList from "./CatalogList";
import { fetchShoes } from "../../actions";
import { useHttp } from "../../hooks/http.hook";
import { createUrl } from "../../api/createUrl";
import { searchShoesChanged, shoesCategoryChanged } from "../../actions";


import "./catalog.css";


export default function Catalog() {
  // const [data, setData] = useState('');
  const { categoryes, categoryLoadingStatus, activeCategory } = useSelector(
    (state) => state.categoryes);
  const { shoes, shoesLoadingStatus, offset, end, search } = useSelector((state) => state.shoesList);

  const dispatch = useDispatch();
  const { request } = useHttp();

  const handleData = (event) => {
    // setData(event.target.value);
   dispatch(searchShoesChanged(event.target.value))
  };
  console.log(search)
  console.log(shoes)


  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline"
        onSubmit={(e) => {
          e.preventDefault()
          if (search.length < 1) {
             dispatch(fetchShoes(request, createUrl(activeCategory.name, offset, activeCategory.id)))
           }
           dispatch(fetchShoes(request, createUrl(activeCategory.name, offset, activeCategory.id, search )))
          }} 
        >
        <input className="form-control" placeholder="Поиск"
          onChange={e => handleData(e) }
          value={search}
          //defaultValue={search}
          />
      </form>
      <CatalogCategories />
      <CatalogList />
    </section>
  );
}
