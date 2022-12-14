import React, { createContext, useEffect, useState } from "react";
//Router & Protected routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
//useContext
import { isUserConnected } from "../firebase/firebase-functions";
//NavBar & Footer
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
//Components (pages)
import Home from "../pages/Home";
import Curso from "../pages/sections/Course";

import BodyParts1 from "../../components/exercices/Vocabulary/exercices/BodyParts1";
import Reading from "../pages/sections/Reading";
import Writing from "../pages/sections/Writing";
import Grammar from "../pages/sections/Grammar";
import Vocabulary from "../pages/sections/Vocabulary";
import Culture from "../pages/sections/Culture";
import Premium from "../pages/sections/Premium";

import SignUp from "../user/SignUp";
import User from "../user/User";
import LogIn from '../user/LogIn';
import BodyPartsVocabulary from "../../components/theory/Vocabulary/BodyParts";

export const UserAuthContext = createContext();

const Router = () => {
  const [user, setUser] = useState(undefined);
  console.log(user);

  useEffect(() => {
    isUserConnected(setUser);
  }, []);

  return (
    <UserAuthContext.Provider value={{ user }}>
      <BrowserRouter>
      <nav>
        <NavBar/>
      </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Curso" element={<Curso/>} />
          <Route path="/Premium" element={<Premium />} />
          <Route path="/Vocabulario" element={<Vocabulary/>}/>
          <Route path="/Vocabulario/PartesDelCuerpo" element={<BodyPartsVocabulary />} />
          <Route path="/Vocabulario/Ejercicios/PartesDelCuerpo" element={<ProtectedRoutes><BodyParts1 /></ProtectedRoutes>} />
          <Route path="/Gramatica" element={<Grammar />} />
          <Route path="/Lectura" element={<Reading />} />
          <Route path="/Escritura" element={<Writing />} />
          <Route path="/Cultura" element={<Culture />} />

          <Route path="/Login" element={<LogIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/User" element={<ProtectedRoutes><User/></ProtectedRoutes>}/>

          {/* Ruta mensaje de error en el caso de que la ruta no exista.*/}
          <Route path="*" element={<div>P??gina en construcci??n</div>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
};

export default Router;
