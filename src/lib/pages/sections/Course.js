import React from "react";
import NavBar from '../../../components/NavBar';
import HomeCards from "../../../components/home/HomeCards";
import { seccion } from "../../../../src/constants/areas_aprendizaje";
import { Link } from "react-router-dom";

const Curso = () => {
  return (
    <div>
        <div className="album py-5 bg-white">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Link to='/Vocabulario'><HomeCards description={seccion.vocabulario} /> </Link>
              <Link to='/Gramatica'><HomeCards description={seccion.gramatica} /></Link>
              <Link to='/Lectura'><HomeCards description={seccion.lectura} /></Link>
              <Link to='/Escritura'><HomeCards description={seccion.escritura} /></Link>
              <Link to='/Cultura'><HomeCards description={seccion.cultura} /></Link>
              <Link to='/Premium'><HomeCards description={seccion.pro} image={'./images/Premium.gif'}/></Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Curso;
