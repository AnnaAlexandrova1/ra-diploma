import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopSalesRequest } from "../../../reducers/topSalesSlice";
import Card from "../../Catalog/Card/Card"
import Error from "../../Error/Error";
import Preloader from "../../Preloader/Preloader";


export default function TopSales() {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((store) => store.topSalesSlice)

  useEffect(() => {
    dispatch(getTopSalesRequest)
  }, [dispatch])
  
  const repeatRequestHandler = (evt) => {
    evt.preventDefault()
    dispatch(getTopSalesRequest())
  }
  if (products.length === 0 &&
    loading === 'idle' &&
    error === null) {
    return null
  }

  if (error) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Error message='Произошла ошибка!' repeatRequestHandler={repeatRequestHandler} />
      </section>
    )
  }

  //console.log(topList);
  return (
     <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading === 'pending' ? <Preloader /> : (
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <Card 
        key={product.id}
        id={product.id}
        category={product.category}
        title={product.title}
        images={product.images}
        price={product.price} />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

