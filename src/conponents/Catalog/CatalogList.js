import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";

export default function CatalogList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAPI = new fetchApi();

  useEffect(() => {
    updateCatalog();
  });

  const updateCatalog = () => {
    fetchAPI.getCatalog().then(onCatalogLoaded).catch(onError);
  };

  const onCatalogLoaded = (charlist) => {
    //console.log(charlist);
    setLoading(false);
    setItems(charlist);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  // console.log(items)
  const list = items.map((item) => {
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

  const catalogList = !(loading || error || !items) ? list : null;
  const preloader = loading ? <Preloader /> : null;

  return (
    <>
      {preloader}
      <div className="row">{catalogList}</div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </>
  );
}
