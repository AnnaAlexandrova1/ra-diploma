import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getShoppingBag } from "../../localStorage/localStorage";
import Order from "./Order";
import Item from "./Item";

export default function Shoppingbag() {
  const [error, setError] = useState(false);

  const shoppingBag = getShoppingBag();

  const list = shoppingBag.map((item) => {
    return <Item item={item} key={item.item.id} />;
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
          <tbody>{list}</tbody>
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

function calcOrder(i) {
  if (i.length < 1) {
    return 0;
  }
  let res = i.reduce((sum, item) => sum + item.item.price * item.qty, 0);
  return res;
}
