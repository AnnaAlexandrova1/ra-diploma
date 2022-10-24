import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";
import MainPage from "../MainPage/MainPage";
import Catalog from "../Catalog/Catalog";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import ItemPage from "../ItemPage/ItemPage";
import Shoppingbag from "../Shoppingbag/Shoppingbag";
import Error from "../Error/Error"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path='catalog/:id' element={<ItemPage />} />
          <Route path='cart' element={<Shoppingbag />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
