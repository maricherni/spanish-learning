import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import LogInPage from '../pages/Login';
import BodyParts1 from '../../components/exercices/Vocabulary/exercices/BodyParts1';
import Cards from '../../components/theory/Vocabulary/Cards';
import Reading from '../pages/sections/Reading';
import Writing from '../pages/sections/Writing';
import Grammar from '../pages/sections/Grammar';
import Vocabulary from '../pages/sections/Vocabulary';
import Culture from '../pages/sections/Culture';
import Pro from '../pages/sections/Pro';




const Router = () => {
    /* const loggedIn = JSON.parse(sessionStorage.getItem('logged')) */

    return(    
    <BrowserRouter>
        <Routes> 
            <Route index element={<Home/>} />
            <Route path='/Ejercicios' element={<BodyParts1/>} />
            <Route path='/Teoria' element={<Cards/>} />
            <Route path='/Vocabulario' element={<Vocabulary/>} />
            <Route path='/Gramatica' element={<Grammar/>} />
            <Route path='/Lectura' element={<Reading/> } />
            <Route path='/Escritura' element={<Writing/>} />
            <Route path='/Cultura' element={<Culture/> } />
            <Route path='/Pro' element={<Pro/> } />
            <Route path='/Area_clientes' element={<LogInPage/>} />
             { /* Ruta mensaje de error en el caso de que la ruta no exista.*/}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
    )
};

export default Router;