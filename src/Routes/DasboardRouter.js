import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditComponent from '../components/EditComponent';
import AddProducts from '../containers/AddProducts';
import Agregar from '../containers/Agregar';
import Home from '../containers/Home';

const DasboardRouter = () => {
    return (
        <>
      {/* rutas privadas */}
        <Routes>
          <Route path="/addProduct" element={<AddProducts />} />

          <Route path="/editcomponent" element={<EditComponent />} />
         
          <Route path="/add" element={<Agregar />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      
    </>
    );
};

export default DasboardRouter;