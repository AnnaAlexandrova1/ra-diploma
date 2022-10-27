import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderControls() {
  const [searchFocus, setSearchFocus] = useState(false);

  const onSearchFocus = () => {
    setSearchFocus(!searchFocus);
  };

  const visibility = () => {
    return searchFocus
      ? "header-controls-search-form form-inline"
      : "header-controls-search-form form-inline invisible";
  };

  const drowVisibility = visibility();

  return (
    <>
      <div className="header-controls-pics">
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={onSearchFocus}
        ></div>
        <Link to={'cart'}>
          <div className="header-controls-pic header-controls-cart">
            <div className="header-controls-cart-full">1</div>
            <div className="header-controls-cart-menu"></div>
          </div>
        </Link>
      </div>
      <form data-id="search-form" className={drowVisibility}>
        <input className="form-control" placeholder="Поиск" />
      </form>
    </>
  );
}
