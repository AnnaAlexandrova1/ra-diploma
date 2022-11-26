import { useState, useEffect } from "react";
import fetchApi from "../../api/fetchApi";
import Card from "./Card/Card";
import Preloader from "../Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import * as actionsPayload from '../../actions/actionsPayload'

export default function CatalogList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [itemsEnded, setItemsEnded] = useState(false)

  const dispatch = useDispatch();
  const fetchAPI = new fetchApi();
  const { isSearch, params } = useSelector(state => state.serviceCatalog)
  const itemsList = useSelector(state => state.serviceItemsList)

  // useEffect(() => {
  //   updateCatalog();
  // }, []);
 
  //загружаем первые 6 картинок

   const getFirstItems = () => {
    fetchAPI.getItems(params).then(onFirtItemsLoaded).catch(onError)
  }

  useEffect(() => {
    getFirstItems()
  }, [])
  
 
  
  const onFirtItemsLoaded = (charlist) => {
    dispatch(actionsPayload.setItems(charlist))
    setLoading(false);
    setNewItemLoading(newItemLoading => false);
  }

  const onItemsListLoading = () => {
     setNewItemLoading(true)
  }

  const updateCatalog = () => {
    dispatch(actionsPayload.setOffset())
    fetchAPI.getItems(params).then(onCatalogLoaded).catch(onError);
  };

  const onCatalogLoaded = (charlist) => {
    let ended = false; //если длина пришедшего массива будет меньше 6, то можно заблокировать кнопку загрузить еще
    
    if (charlist.length < 6) {
      ended = true;
    }
    dispatch(actionsPayload.setItems(charlist))
    setLoading(false);
    setNewItemLoading(newItemLoading => false);
    setItemsEnded(itemsEnded => ended)
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const list = itemsList.map((item) => {
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

  const catalogList = !(loading || error || !itemsList) ? list : null;
  const preloader = loading ? <Preloader /> : null;

  return (
    <>
      {preloader}
      <div className="row align-space-between">{catalogList}</div>
      <div className="text-center">
        <button className="btn btn-outline-primary add-margin-bottom"
          disabled = {newItemLoading}
          onClick={() => updateCatalog()}
        >
          {preloader}
          Загрузить ещё</button>
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
