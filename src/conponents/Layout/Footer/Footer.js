import { NavLink } from 'react-router-dom';
import Contacts from "./Contacts/Contacts";
import PaymentWayInfo from "./PaymentWayInfo/PaymentWayInfo";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/about">
                  О магазине
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/catalog">
                  Каталог
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
        <div className="col">
          <PaymentWayInfo />
        </div>
        <div className="col text-right">
          <Contacts />
        </div>
      </div>
    </footer>
  );
}
