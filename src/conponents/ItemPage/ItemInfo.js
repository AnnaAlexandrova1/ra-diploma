import PropTypes, { func } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

export default function ItemInfo(props) {
  const {
    category,
    color,
    heelSize,
    id,
    images,
    manufacturer,
    material,
    oldPrice,
    price,
    reason,
    season,
    sizes,
    sku,
    title,
  } = props.productInfo;

  const dispatch = useDispatch();
  //const itemId = useSelector(state => state.itemId)

  const addToShoppingBag = (productInfo) => {
    dispatch({ type: "ADD_TO_SHOPPINGBAG", payload: productInfo });
  };

  return (
    <>
      <h2 className="text-center">{title}</h2>
      <div className="row item-page">
        <div className="col-5 item-page">
          {<img src={images[0]} className="img-fluid" alt="" />}
        </div>
        <div className="col-7 item-page">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:{" "}</p>
              <Sizes list={sizes}/>
            
            <p>
              Количество:{" "}
              <span className="btn-group btn-group-sm pl-2">
                <button className="btn btn-secondary">-</button>
                <span className="btn btn-outline-primary">1</span>
                <button className="btn btn-secondary">+</button>
              </span>
            </p>
          </div>
          <Link to={"/cart"}>
            <button
              className="btn btn-danger btn-block btn-lg"
              onClick={() => addToShoppingBag(id)}
            >
              В корзину
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

const Sizes = (props) => {
  return props.list.map((item, i) => {
    if (item.size) {
      return (
        <span className="catalog-item-size"
          //onClick={() => {}  }
          key={i}>{item.size}</span>
    )
    }
  })
}

ItemInfo.propTypes = {
  category: PropTypes.number,
  color: PropTypes.string,
  heelSize: PropTypes.string,
  id: PropTypes.number,
  images: PropTypes.array,
  manufacturer: PropTypes.string,
  material: PropTypes.string,
  oldPrice: PropTypes.number,
  price: PropTypes.number,
  reason: PropTypes.string,
  season: PropTypes.string,
  sizes: PropTypes.array,
  sku: PropTypes.string,
  title: PropTypes.string,
};

// ItemInfo.defaultProps = {
//     category: "",
//     color: "",
//     heelSize: '',
//     id: '',
//     images: [],
//     manufacturer: '',
//     material: '',
//     oldPrice: '',
//     price: '',
//     reason: '',
//     season: '',
//     sizes: [],
//     sku: '',
//     title: '',
// }
