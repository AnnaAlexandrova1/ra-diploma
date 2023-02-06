import PropTypes, { func } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addToStorage } from "../../localStorage/localStorage";
import Sizes from "./Sizes";

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

  const [selectSize, setSelectSize] = useState(null);
  const [qty, setQty] = useState(1);
  console.log(selectSize)

  const updateSize = (char) => {
    setSelectSize(char);
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
            <p>Размеры в наличии: </p>
            <Sizes list={sizes} updateSize={updateSize} />
            <p>
              Количество:
              <span className="btn-group btn-group-sm pl-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    if (qty > 1) {
                      setQty((qty) => qty - 1);
                    } else {
                      return;
                    }
                  }}
                >
                  -
                </button>
                <span className="btn btn-outline-primary">{qty}</span>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    if (qty < 10) {
                      setQty((qty) => qty + 1);
                    } else {
                      return;
                    }
                  }}
                >
                  +
                </button>
              </span>
            </p>
          </div>
          <Link to={selectSize ? "/cart" : "#"}>
            <button
              className="btn btn-danger btn-block btn-lg"
              disabled={!selectSize}
              onClick={() => {
                addToStorage(
                  { id: id, title: title, price: price, sku: sku },
                  qty,
                  selectSize
                );
              }}>
              В корзину
            </button>
          </Link>
        </div>
      </div>
    </>
  );
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
