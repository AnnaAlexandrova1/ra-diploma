import { useEffect, useState } from "react";
import fetchApi from "../../../api/fetchApi";
import Card from "../../Catalog/Card/Card"
import Preloader from "../../Preloader/Preloader";

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


  //console.log(topList);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {preloader}
      <div className="row">{topList}</div>
    </section>
  );
}

