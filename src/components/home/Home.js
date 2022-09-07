import React from "react";
import NavBar from '../NavBar';
import HomeCards from "./HomeCards";
import WordOfTheDay from "./WordOfTheDay";
import { seccion } from "../../constants/areas_aprendizaje";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar/>
        <div className="album py-5 bg-dark">
          <div className="container">
            <div className="row text-center mb-3 mt-1">
              <WordOfTheDay/>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Link to='/Vocabulario'><HomeCards description={seccion.vocabulario} /> </Link>
              <Link to='/Gramatica'><HomeCards description={seccion.gramatica} /></Link>
              <Link to='/Lectura'><HomeCards description={seccion.lectura} /></Link>
              <Link to='/Escritura'><HomeCards description={seccion.escritura} /></Link>
              <Link to='/Cultura'><HomeCards description={seccion.cultura} /></Link>
              <Link to='/Pro'><HomeCards description={seccion.pro} /></Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
