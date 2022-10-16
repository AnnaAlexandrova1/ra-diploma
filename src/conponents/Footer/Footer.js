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
                <a href="/about.html" className="nav-link">
                  О магазине
                </a>
              </li>
              <li className="nav-item">
                <a href="/catalog.html" className="nav-link">
                  Каталог
                </a>
              </li>
              <li className="nav-item">
                <a href="/contacts.html" className="nav-link">
                  Контакты
                </a>
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
