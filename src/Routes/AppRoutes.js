import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProducts from "../containers/AddProducts";
import Agregar from "../containers/Agregar";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/add" element={<Agregar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
