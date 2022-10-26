import "./card.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  const { id, category, title, images, price } = props;

  const dispatch = useDispatch()
  const itemId = useSelector(state => state.itemId)

   const addItem = (itemId) => {
    dispatch({type: 'ADD_ITEM', payload: itemId})
  }
  
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={images[0]} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <Link to={`/catalog/${id}`}>
            <button className="btn btn-outline-primary" onClick={() => addItem(id)}>Заказать</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
