import './card.css'

export default function Card(props) {
  const { id, category, title, images, price } = props;
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={images[0]} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <button className="btn btn-outline-primary">
          {/* <button href="/products/1.html" className="btn btn-outline-primary"> */}
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
