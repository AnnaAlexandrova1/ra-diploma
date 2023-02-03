import { useState, useEffect } from "react";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { fetchShoes, fetchMoreShoes } from "../../actions";

export default function CatalogList() {
  const { categoryes, categoryLoadingStatus, activeCategory } = useSelector(
    (state) => state.categoryes
  );
  const { shoes, shoesLoadingStatus, offset, end } = useSelector((state) => state.shoesList);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const createUrl = () => {
    let url = new URLSearchParams();
    if (activeCategory.name === "all") {
      if (offset === 0) {
         return "";
      } else {
        url.append('offset', offset)
        return `?${url}`
      }    
    } else {
      if (offset === 0) {
        url.append("categoryId", activeCategory.id);
        return `?${url}`;
      } else {
        url.append("categoryId", activeCategory.id);
        url.append('offset', offset)
        return `?${url}`
      }
    }
  };
  
  useEffect(() => {
    dispatch(fetchShoes(request, createUrl()));
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
            dispatch(fetchMoreShoes(request, createUrl()))
          }}
        >
          Загрузить ещё
        </button>
      </div>
    </>
  );
}
