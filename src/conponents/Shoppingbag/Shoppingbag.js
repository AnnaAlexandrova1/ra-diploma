import Order from "./Order";
import Item from "./Item";
import { getShoppingBag } from "../../localStorage/localStorage";
import { useState } from "react";

export default function Shoppingbag() {
  const [list, setList] = useState(getShoppingBag() || [])
  const [orderStatus, setOrderStatus] = useState(false);

    const updateShoppingBag = () => {
        setList(getShoppingBag() || [])
    }

  const drowtList = (list) => {
    if (list.length > 0) {
      return list.map((item, i) => {
          return <Item item={item} i={i} updateShoppingBag={updateShoppingBag} />;
      });
    } else {
      return null;
    }
  };

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
          <tbody>{orderStatus ? null : drowtList(list)}</tbody>
        </table>
      </section>
      <Order updateShoppingBag={updateShoppingBag} orderStatus={orderStatus} setOrderStatus={ setOrderStatus} />
    </>
  );
}
