import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProducts from "../containers/AddProducts";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Verification from "../containers/Verification";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
