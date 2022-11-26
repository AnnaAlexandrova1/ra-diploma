import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./conponents/App/App";
import store from "./store";
import fetchApi from "./api/fetchApi";

const fetchAPI = new fetchApi()
fetchAPI.getItems({offset:6, search:'туфли' }).then((result) => console.log(result))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
