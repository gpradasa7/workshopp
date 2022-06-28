import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditComponent from "../components/EditComponent";
import AddProducts from "../containers/AddProducts";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Verification from "../containers/Verification";
import Agregar from "../containers/Agregar";
import Home from "../containers/Home";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />

          <Route path="/editcomponent" element={<EditComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/add" element={<Agregar />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
