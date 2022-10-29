import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getShoppingBag } from "../../localStorage/localStorage";
import { QTY_SHOPPINGBAG } from "../../actions/actions";
import Order from "./Order";
import Item from "./Item";

export default function Shoppingbag() {
  const [error, setError] = useState(false);
  const [ItemsList, setItemsList] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  //const shoppingBag = getShoppingBag()

  useEffect(() => setItemsList(getShoppingBag()), []);
  useEffect(() => setTotalQty(calcTotalQty(ItemsList)), [ItemsList]);
  useEffect(() => qtyShoppingBag(totalQty), [totalQty]);

  const updateShoppingBag = () => {
    setItemsList(getShoppingBag());
  };

  const calcTotalQty = (ItemsList) => {
    if (ItemsList.length < 1) {
      return 0;
    }
    return ItemsList.reduce((sum, item) => sum + item.qty, 0);
  };

  const dispatch = useDispatch();
  const qtyShoppingBag = (totalQty) => {
    dispatch({ type: QTY_SHOPPINGBAG, payload: totalQty });
  };

  const orderPosted = (succes) => {
    if (succes) {
      setItemsList([]);
    }
  };

  const list = ItemsList.map((item, i) => {
    return (
      <Item
        item={item}
        updateShoppingBag={updateShoppingBag}
        i={i}
        key={item.item.id}
      />
    );
  });

  //console.log(totalQty)
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
              <td>{calcOrder(ItemsList)} руб.</td>
            </tr>
          </tfoot>
        </table>
      </section>
      <Order orderPosted={orderPosted} />
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
