import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProducts from "../containers/AddProducts";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
