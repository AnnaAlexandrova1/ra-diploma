import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ShoppingList from "./ShoppingList";
import Order from "./Order";
import Item from "./ShoppingList";
import { current } from "@reduxjs/toolkit";

export default function Shoppingbag() {
  const [error, setError] = useState(false);

  const shoppingBag = useSelector((state) => state.shoppingBag);
  //console.log(shoppingbag);

  const list = shoppingBag.map((i) => {
      return <Item i={i} key={ i.id} />;
  });

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
              {list}
           </tbody>
          <tfoot>
          <tr>
            <td colSpan="5" className="text-right">
              Общая стоимость
            </td>
            <td>{calcOrder(shoppingBag)} руб.</td>
            </tr>
            </tfoot>
        </table>
      </section>
      <Order />
    </>
  );
}


function calcOrder (i) {
    if(i.length < 1) {
        return 0
    }

    let res =  i.reduce((sum, item) => sum + item.price, 0)
    return res
}