import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditComponent from "../components/EditComponent";
import AddProducts from "../containers/AddProducts";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Verification from "../containers/Verification";
import Agregar from "../containers/Agregar";
import Home from "../containers/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import DasboardRouter from "./DasboardRouter";


const AppRoutes = () => {
  const [checking, setChecking] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        console.log(user)
        setIsLoggedIn(true)

        // user.getIdToken()
        // .then((token)=> {
        //     console.log('el token es: ', token)
        // })
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [setIsLoggedIn, setChecking])


  if (checking) {
    return (


      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>

    )
  }
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={
            <PublicRouter isAutentication={isLoggedIn}>
              <Login />
            </PublicRouter>
          } />
          <Route path="/register" element={
            <PublicRouter isAutentication={isLoggedIn}>
              <Register />
            </PublicRouter>
          } />

          <Route path="/verify" element={
            <PublicRouter isAutentication={isLoggedIn}>
              <Verification />
            </PublicRouter>
          } />

          <Route path="/*" element={

            <PrivateRouter isAutentication={isLoggedIn}>
              <DasboardRouter />
            </PrivateRouter>
          }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
