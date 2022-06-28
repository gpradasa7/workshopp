import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditComponent from "../components/EditComponent";
import AddProducts from "../containers/AddProducts";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/editcomponent" element={<EditComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
