import { useEffect, useState } from "react";
import fetchApi from "../../api/fetchApi";
import ItemInfo from "./ItemInfo";
import Preloader from "../Preloader/Preloader";
import './itemPage.css'


export default function ItemPage(props) {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchAPI = new fetchApi();

  useEffect(() => {
    getItemInfo();
  }, []);

  //поменяй тут переменную после отрисовки
  const getItemInfo = () => {
    fetchAPI.getItemInfo(20).then(renderItemInfo).catch(onError);
  };

  const renderItemInfo = (char) => {
    setItem(char);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const itemPage = !(loading || error || !item) ? (
    <ItemInfo productInfo={item} />
  ) : null;
  const preloader = loading ? <Preloader /> : null;
    console.log(item)
  return (
    <section className="catalog-item">
      {itemPage}
      {preloader}
    </section>
  );
}
