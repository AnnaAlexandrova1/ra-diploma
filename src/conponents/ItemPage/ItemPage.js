import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchApi from "../../api/fetchApi";
import ItemInfo from "./ItemInfo";
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";
// import { useHttp } from "../../hooks/http.hook";
// import { fetchitemId } from "../../actions";

export default function ItemPage() {
  const { id, itemLoadingStatus, item } = useSelector((state) => state.itemId)
  const dispatch = useDispatch();
  // const { request } = useHttp();

  // useEffect(() => {
  //   dispatch(fetchitemId(request, id))
  // }, []);

  // console.log(id)
  // console.log(item)

  if (itemLoadingStatus === "loading") {
    return <Preloader />;
  } else if (itemLoadingStatus === "error") {
    return <Error />;
  }
  if (!item) {
    console.log('jib,rf')
  }

  return (
    <section className="catalog-item">
    <ItemInfo productInfo={item} />
    </section>
  );
}


