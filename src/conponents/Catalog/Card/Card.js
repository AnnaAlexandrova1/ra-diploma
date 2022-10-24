import "./card.css";
import { Link } from "react-router-dom";
import ItemPage from "../../ItemPage/ItemPage";

export default function Card(props) {
  const { id, category, title, images, price } = props;
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={images[0]} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <Link to={`/catalog/${id}`}>
            <button className="btn btn-outline-primary">Заказать</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
