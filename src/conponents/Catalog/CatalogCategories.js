import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../api/fetchApi";
import { fetchCategory } from "../../actions";
import { useHttp } from "../../hooks/http.hook";

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

  // вот тут продолжить

  if (categoryLoadingStatus === "loading") {
    return <Preloader />;
  } else if (categoryLoadingStatus === "error") {
    return <Error />;
  }

  const renderCategory = (arr) => {
    if (arr.length === 0) {
      return (
        <a className="nav-link active" href="#">
          Фильтры не найдены
        </a>
      );
    }
    return arr.map((i) => {
      return (
        <li
          className="nav-item"
          key={i.id}
          // onClick={() => {
          //   dispatch(actionsPayload.changeCategory(i.id))
          // }}
        >
          <a className="nav-link" href="#">
            {i.title}
          </a>
        </li>
      );
    });
  };
  const categoriesList = renderCategory(categoryes);

  return (
    <ul className="catalog-categories nav justify-content-center add-width">
      <li
        className="nav-item"
        // onClick={() => dispatch(actionsPayload.selectAllCategory())}
      >
        <a className="nav-link active" href="#">
          Все
        </a>
      </li>
      {categoriesList}
    </ul>
  );
}
