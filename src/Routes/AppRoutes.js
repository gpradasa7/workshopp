import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProducts from "../containers/AddProducts";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Agregar from "../containers/Agregar";
import Home from "../containers/Home";


const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Agregar />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
