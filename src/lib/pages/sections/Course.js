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
              <Link to='/Vocabulario'><HomeCards /* description={seccion.vocabulario} */ image={'./images/vocabulario.png'}/> </Link>
              <Link to='/Gramatica'><HomeCards /* description={seccion.gramatica} */image={'./images/gramatica.jpg'} /></Link>
              <Link to='/Lectura'><HomeCards /* description={seccion.lectura} */ image={'./images/lectura.png'}/></Link>
              <Link to='/Escritura'><HomeCards /* description={seccion.escritura} */image={'./images/escritura.jpg'} /></Link>
              <Link to='/Cultura'><HomeCards /* description={seccion.cultura} */ image={'./images/cultura.jpg'}/></Link>
              <Link to='/Premium'><HomeCards /* description={seccion.pro} */ image={'./images/premium.jpg.jpg'}/></Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Curso;
