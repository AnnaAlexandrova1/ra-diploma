import "./card.css";
import { Link, useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { idPull } from "../../../actions";
import { fetchitemId } from "../../../actions";
import { useHttp } from "../../../hooks/http.hook";

export default function Card(props) {
  const { id, category, title, images, price } = props;
   const { request } = useHttp();

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const itemId = useSelector(state => state.itemId)

   const addItem = (id) => {
     dispatch(idPull(id))
     dispatch(fetchitemId(request, id))
     navigate(`/catalog/${id}`)
  }
  
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={images[0]} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          {/* <Link to={`/catalog/${id}`}> */}
            <button className="btn btn-outline-primary" onClick={() => addItem(id)}>Заказать</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
