
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../api/fetchApi";


export default function CatalogCategories() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch()


  useEffect(() => {
    updateCategories();
  }, []);

  const updateCategories = () => {
    getCategories().then(onCategoriesLoaded).catch(onError);
  };

  const onCategoriesLoaded = (char) => {
    setList(char);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
  };

  const catList = list.map((i) => {
    return (
      <li className="nav-item" key={i.id}
        // onClick={() => {
        //   dispatch(actionsPayload.changeCategory(i.id))
        // }}
      >
        <a className="nav-link" href="#">
          {i.title}
        </a>
      </li>
    );
  });

  const categoriesList = !(loading || error || !list) ? catList : null;

  return (
    <ul className="catalog-categories nav justify-content-center add-width">
      <li className="nav-item"
        // onClick={() => dispatch(actionsPayload.selectAllCategory())}
      >
        <a className="nav-link active" href="#">
          Все
        </a>
      </li>
      {categoriesList}
    </ul>
  );
}
