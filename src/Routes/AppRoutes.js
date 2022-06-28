import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditComponent from "../components/EditComponent";
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

          <Route path="/editcomponent" element={<EditComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Agregar />} />
<<<<<<< HEAD
          <Route path="/home" element={<Home />} />

=======
>>>>>>> 7283fc4b765e0e7a7474b8ceae343c3a5f4d70f0
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
