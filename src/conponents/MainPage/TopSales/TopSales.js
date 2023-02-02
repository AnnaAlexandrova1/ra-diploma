import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopSales } from "../../../api/fetchApi";
import Card from "../../Catalog/Card/Card"
import Error from "../../Error/Error";
import Preloader from "../../Preloader/Preloader";


export default function TopSales() {
  const [topList, setTopList] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getTopSalesList = () => {
    getTopSales().then(onListLoaded).catch(onError)
  }

  useEffect(() => {
    getTopSalesList()
  }, [])

  const onListLoaded = (res) => {
    setLoading(false)
    setTopList(res)
  }
  
  const onError = () => {
    setLoading(false)
    setError(true)
  }
  
  if (topList.length === 0 &&
    loading === false &&
    error === false) {
    return null
  }

  if (error) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Error message='Произошла ошибка!'/>
      </section>
    )
  }


  return (
     <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading === 'pending' ? <Preloader /> : (
        <div className="row">
          {topList.map((product) => {
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

