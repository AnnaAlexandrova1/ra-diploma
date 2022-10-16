import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";
import MainPage from "../MainPage/MainPage";
import Catalog from "../Catalog/Catalog";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<IndexPage />} /> */}
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
