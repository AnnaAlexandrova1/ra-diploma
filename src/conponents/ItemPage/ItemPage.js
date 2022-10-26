import { useEffect, useState } from "react";
import fetchApi from "../../api/fetchApi";
import ItemInfo from "./ItemInfo";
import Preloader from "../Preloader/Preloader";
import './itemPage.css'
import { useDispatch, useSelector } from "react-redux";


export default function ItemPage() {

  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchAPI = new fetchApi();

  useEffect(() => {
    getItemInfo();
  }, []);

  const itemId = useSelector(state => state.itemId)
  //console.log(itemId)

  const getItemInfo = () => {
    fetchAPI.getItemInfo(itemId).then(renderItemInfo).catch(onError);
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
    //console.log(item)
  return (
    <section className="catalog-item">
      {itemPage}
      {preloader}
    </section>
  );
}
