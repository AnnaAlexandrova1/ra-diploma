import { useState, useEffect } from "react";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { fetchShoes, fetchMoreShoes } from "../../actions";
import { createUrl } from "../../api/createUrl";

export default function CatalogList() {
  const { categoryes, categoryLoadingStatus, activeCategory } = useSelector(
    (state) => state.categoryes
  );
  const { shoes, shoesLoadingStatus, offset, end, search } = useSelector((state) => state.shoesList);
  const dispatch = useDispatch();
  const { request } = useHttp();

  
  useEffect(() => {
    dispatch(fetchShoes(request, createUrl(activeCategory.name, offset, activeCategory.id, search)));
  }, [activeCategory.name]);

  if (categoryLoadingStatus === "loading") {
    return <Preloader />;
  } else if (categoryLoadingStatus === "error") {
    return <Error />;
  }

  const renderShoes = (arr) => {
    if (arr.length === 0) {
      return <Error />;
    }

    return arr.map((item) => {
      return (
        <Card
          key={item.id}
          id={item.id}
          category={item.category}
          title={item.title}
          images={item.images}
          price={item.price}
        />
      );
    });
  };

  const shoesList = renderShoes(shoes)

  return (
    <>
      <div className="row align-space-between">{shoesList}</div>
      <div className="text-center">
        <button
          className="btn btn-outline-primary add-margin-bottom"
          disabled = {shoesLoadingStatus !== "idle" || end}
          onClick={() => {
            dispatch(fetchMoreShoes(request, createUrl(activeCategory.name, offset, activeCategory.id, search)))
          }}
        >
          Загрузить ещё
        </button>
      </div>
    </>
  );
}
