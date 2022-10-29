import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";

export default function CatalogList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offSet, setOffset] = useState(6);
  const [itemsEnded, setItemsEnded] = useState(false)

  const fetchAPI = new fetchApi();

  useEffect(() => {
    updateCatalog();
  }, []);
 
  //загружаем первые 6 картинок
  useEffect(() => {
    getFirstItems()
  }, [])
  
  const getFirstItems = () => {
    fetchAPI.getFirstItems().then(onFirtItemsLoaded).catch(onError)
  }
  
  const onFirtItemsLoaded = (charlist) => {
    setItems(charlist)
    setLoading(false);
    setNewItemLoading(newItemLoading => false);
  }


  const onItemsListLoading = () => {
     setNewItemLoading(true)
  }

  const updateCatalog = () => {
    fetchAPI.getCatalog(offSet).then(onCatalogLoaded).catch(onError);
  };

  const onCatalogLoaded = (charlist) => {
    let ended = false; //если длина пришедшего массива будет меньше 6, то можно заблокировать кнопку загрузить еще
    
    if (charlist.length < 6) {
      ended = true;
    }
    setItems(items => [...items, ...charlist]);
    setLoading(false);
    setNewItemLoading(newItemLoading => false);
    setOffset(offSet => offSet + 6)
    setItemsEnded(itemsEnded => ended)
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
      <div className="row align-space-between">{catalogList}</div>
      <div className="text-center">
        <button className="btn btn-outline-primary add-margin-bottom"
          disabled = {newItemLoading}
          onClick={() => updateCatalog(offSet)}
        >
          {preloader}
          Загрузить ещё</button>
      </div>
    </>
  );
}
