import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../api/fetchApi";
import { fetchCategory, activeCategoryChanged } from "../../actions";
import { useHttp } from "../../hooks/http.hook";
import classNames from "classnames";

import Preloader from "./../Preloader/Preloader";
import Error from "./../Error/Error";

export default function CatalogCategories() {
  const { categoryes, categoryLoadingStatus, activeCategory } = useSelector(
    (state) => state.categoryes
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchCategory(request));
  }, []);

  if (categoryLoadingStatus === "loading") {
    return <Preloader />;
  } else if (categoryLoadingStatus === "error") {
    return <Error />;
  }

  const renderCategory = (arr) => {
    if (arr.length === 0) {
      return (
        <a className="nav-link" href="#">
          Фильтры не найдены
        </a>
      );
    }
    return arr.map((i) => {
      const itemClass = classNames("nav-link", {
        active: i.title === activeCategory.name,
      });

      return (
        <li
          className="nav-item"
          key={i.id}
          onClick={() => {
            dispatch(activeCategoryChanged({ name: i.title, id: i.id }));
          }}
        >
          <a className={itemClass} href="#">
            {i.title}
          </a>
        </li>
      );
    });
  };
  const categoriesList = renderCategory(categoryes);

  const itemClassAll = classNames("nav-link", {
    active: activeCategory.name === "all",
  });

  return (
    <ul className="catalog-categories nav justify-content-center add-width">
      <li
        className="nav-item"
        onClick={() => dispatch(activeCategoryChanged({ name: "all", id: '' }))}
      >
        <a className={itemClassAll} href="#">
          Все
        </a>
      </li>
      {categoriesList}
    </ul>
  );
}
