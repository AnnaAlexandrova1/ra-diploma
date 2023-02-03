import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import { moreShoesFetching } from "../../actions";
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
  const { shoes, shoesLoadingStatus, offset } = useSelector((state) => state.shoesList);
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
  console.log(createUrl());

  useEffect(() => {
    dispatch(fetchShoes(request, createUrl()));
  }, [activeCategory.name]);

  //   useEffect(() => {
  //   dispatch(fetchMoreShoes(request, createUrl()));
  // }, [offset]);

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
          disabled = {shoesLoadingStatus !== "idle"}
          onClick={() => {
            dispatch(fetchMoreShoes(request, createUrl()))
          }}
        >
          {/* {preloader} */}
          Загрузить ещё
        </button>
      </div>
    </>
  );
}

// export default function CatalogList() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [newItemLoading, setNewItemLoading] = useState(false);
//   const [itemsEnded, setItemsEnded] = useState(false)

//   const dispatch = useDispatch();

//   const fetchAPI = new fetchApi();
//   const { isSearch, params } = useSelector(state => state.serviceCatalog)
//   //fetchAPI.getItems(params).then((result) => console.log(result))

//   useEffect(() => {
//     updateCatalog();
//   }, []);

//   //загружаем первые 6 картинок
//   useEffect(() => {
//     getFirstItems()
//   }, [params.categoryID, params.searchText])

//   const getFirstItems = () => {
//     fetchAPI.getItems(params).then(onFirtItemsLoaded).catch(onError)
//   }

//   const onFirtItemsLoaded = (charlist) => {
//     console.log(charlist)
//     setItems(charlist)
//     setLoading(false);
//     setNewItemLoading(newItemLoading => false);
//   }

//   const onItemsListLoading = () => {
//      setNewItemLoading(true)
//   }

//   const updateCatalog = () => {
//     dispatch(actionsPayload.setOffset())
//     fetchAPI.getItems(params).then(onCatalogLoaded).catch(onError);
//   };

//   const onCatalogLoaded = (charlist) => {
//     let ended = false; //если длина пришедшего массива будет меньше 6, то можно заблокировать кнопку загрузить еще

//     if (charlist.length < 6) {
//       ended = true;
//     }
//     setItems(items => [...items, ...charlist]);
//     setLoading(false);
//     setNewItemLoading(newItemLoading => false);
//     setItemsEnded(itemsEnded => ended)
//   };

//   const onError = () => {
//     setError(true);
//     setLoading(false);
//   };

//   // console.log(items)
//   const list = items.map((item) => {
//     return (
//       <Card
//         key={item.id}
//         id={item.id}
//         category={item.category}
//         title={item.title}
//         images={item.images}
//         price={item.price}
//       />
//     );
//   });

//   const catalogList = !(loading || error || !items) ? list : null;
//   const preloader = loading ? <Preloader /> : null;

//   return (
//     <>
//       {preloader}
//       <div className="row align-space-between">{catalogList}</div>
//       <div className="text-center">
//         <button className="btn btn-outline-primary add-margin-bottom"
//           disabled = {newItemLoading}
//           onClick={() => updateCatalog()}
//         >
//           {preloader}
//           Загрузить ещё</button>
//       </div>
//     </>
//   );
// }
