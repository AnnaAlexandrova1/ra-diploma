import { useState } from "react";
import React from "react";
import { getShoppingBag } from "../../localStorage/localStorage";
import fetchApi from "../../api/fetchApi";

export default function Order({ orderPosted}) {
  const [orderStatus, setOrderStatus] = useState(false);

  const changeStatus = (responce) => {
    if (responce) {
      setOrderStatus(true);
      orderPosted(true);
    } else {
      return;
    }
  };

 

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <Form orderStatus={orderStatus} changeStatus={changeStatus} />
        <Succes orderStatus={orderStatus} />
      </div>
    </section>
  );
}

const Form = ({ orderStatus, changeStatus }) => {
  const fetchAPI = new fetchApi();

  const phone = React.createRef();
  const address = React.createRef();
  const checked = React.createRef();

  const sendOrder = (event) => {
    event.preventDefault();

    if (
      phone.current.value.length > 3 &&
      address.current.value.length > 4 &&
      checked.current.checked
    ) {
      const cart = getShoppingBag().map((item) => {
        return {
          id: item.item.id,
          price: item.item.price,
          count: item.qty,
        };
      });

      const order = {
        owner: {
          phone: phone.current.value.trim(),
          address: address.current.value.trim(),
        },
        items: cart,
      };

      //     const order = {
      // owner: {
      //   phone: '79264776497',
      //   address:'Moscow City',
      // },
      // items: [
      //   {
      //     id: 1,
      //     price: 34000,
      //     count: 1
      //   }
      // ]
      //     }

      fetchAPI.postOrder(order).then((responce) => {
        if (responce) {
          localStorage.clear();
          changeStatus(responce);
    
        }
      });
    } else {
      return;
    }
  };

  if (!orderStatus) {
    return (
      <form className="card-body not-absolute">
        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            className="form-control"
            id="phone"
            placeholder="Ваш телефон"
            ref={phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Адрес доставки</label>
          <input
            className="form-control"
            id="address"
            placeholder="Адрес доставки"
            ref={address}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreement"
            ref={checked}
          />
          <label className="form-check-label" htmlFor="agreement">
            Согласен с правилами доставки
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={(event) => sendOrder(event)}
        >
          Оформить
        </button>
      </form>
    );
  }
};

const Succes = ({ orderStatus }) => {
  if (orderStatus) {
    return <h2 className="text-center"> Ваш заказ успешно отправлен</h2>;
  } else return;
};
