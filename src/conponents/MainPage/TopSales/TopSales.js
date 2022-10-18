import { useEffect, useState } from "react";
import fetchApi from "../../../api/fetchApi";
import Card from "../../Catalog/Card/Card"

import './topSales.css'

export default function TopSales() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAPI = new fetchApi();

  useEffect(() => {
    updateTopSales();
  });

  const updateTopSales = () => {
    fetchAPI.getTopSales().then(onItemsListLoaded).catch(onError);
  };

  const onItemsListLoaded = (charList) => {
    setLoading(false);
    setItems(charList);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const list  = items.map((item) => {
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

  const topList = !(loading || error || !items) ? list : null;
  const preloader = loading ? <Preloader /> : null;


  console.log(topList);
  return (
    <section class="top-sales">
      <h2 class="text-center">Хиты продаж!</h2>
      {preloader}
      <div class="row">{topList}</div>
    </section>
  );
}

const Preloader = () => {
  return (
    <div class="preloader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
