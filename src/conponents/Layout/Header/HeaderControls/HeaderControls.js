import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchShoesChanged } from "../../../../actions";

export default function HeaderControls() {
  const [searchFocus, setSearchFocus] = useState(false);
  const [cartQuantaty, setCartQuantaty] = useState(0);
  const dispatch = useDispatch()
  const dataRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    setCartQuantaty(qty);
  });

  const showQuantaty = () => {
    if (cartQuantaty===0) {
      return "header-controls-cart-full invisible";
    }
    return "header-controls-cart-full";
  };

  const qty = useSelector((state) => state.qty);

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
        <Link to={"cart"}>
          <div className="header-controls-pic header-controls-cart">
            <div className={showQuantaty()}>{cartQuantaty}</div>
            <div className="header-controls-cart-menu"></div>
          </div>
        </Link>
      </div>
      <form data-id="search-form"
        className={drowVisibility}
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(searchShoesChanged(dataRef.current.value))
          navigate("/catalog")
        }} 
        
      >
        <input className="form-control"
          placeholder="Поиск"
          ref={dataRef}
        />
      </form>
    </>
  );
}
