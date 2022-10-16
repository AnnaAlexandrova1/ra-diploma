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
        <Route to="/" element={<Layout />}>
          {/* <Route index element={<IndexPage />} /> */}
          <Route index element={<MainPage />} />
          <Route to="catalog" element={<Catalog />} />
          <Route to="about" element={<About />} />
          <Route to="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
