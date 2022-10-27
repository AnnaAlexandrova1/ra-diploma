import { findByTestId } from "@testing-library/react";
import { useEffect, useState } from "react";
import fetchApi from "../../api/fetchApi";

export default function CatalogCategories() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchAPI = new fetchApi();

  useEffect(() => {
    updateCategories();
  }, []);

  const updateCategories = () => {
    fetchAPI.getCategories().then(onCategoriesLoaded).catch(onError);
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
      <li className="nav-item" key={i.id}>
        <a className="nav-link" href="#">
          {i.title}
        </a>
      </li>
    );
  });

  const categoriesList = !(loading || error || !list) ? catList : null;

  return (
    <ul className="catalog-categories nav justify-content-center add-width">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Все
        </a>
      </li>
      {categoriesList}
    </ul>
  );
}
