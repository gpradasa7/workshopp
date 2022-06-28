import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProducts from "../containers/AddProducts";
import Login from "../containers/Login";
import Register from "../containers/Register";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
