import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { isUserConnected } from "../firebase/firebase-functions";

import Home from "../pages/Home";
import LogInPage from "../pages/Login";
import BodyParts1 from "../../components/exercices/Vocabulary/exercices/BodyParts1";
import Cards from "../../components/theory/Vocabulary/Cards";
import Reading from "../pages/sections/Reading";
import Writing from "../pages/sections/Writing";
import Grammar from "../pages/sections/Grammar";
import Vocabulary from "../pages/sections/Vocabulary";
import Culture from "../pages/sections/Culture";
import Pro from "../pages/sections/Pro";

import SignUp from "../user/SignUp";
import User from "../user/User";

export const UserAuth = createContext();

const Router = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    isUserConnected(setUser);
    console.log(user);
  }, []);

  return (
    <UserAuth.Provider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Ejercicios" element={
              <ProtectedRoutes>
                <BodyParts1 />
              </ProtectedRoutes>
            } />
          <Route path="/Teoria" element={<Cards />} />
          <Route path="/Vocabulario" element={<Vocabulary />} />
          <Route path="/Gramatica" element={<Grammar />} />
          <Route path="/Lectura" element={<Reading />} />
          <Route path="/Escritura" element={<Writing />} />
          <Route path="/Cultura" element={<Culture />} />
          <Route path="/Pro" element={<Pro />} />

          <Route path="/AreaClientes" element={<LogInPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/User"
            element={
              <ProtectedRoutes>
                <User />
              </ProtectedRoutes>
            }
          />

          {/* Ruta mensaje de error en el caso de que la ruta no exista.*/}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </UserAuth.Provider>
  );
};

export default Router;
