import React from "react";
import CourseCards from "../../../components/cards/CourseCards";
import { Link } from "react-router-dom";

const Curso = () => {
  return (
    <div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Link to='/Vocabulario'><CourseCards image={'./images/vocabulario.png'}/> </Link>
              <Link to='/Gramatica'><CourseCards image={'./images/gramatica.png'} /></Link>
              <Link to='/Lectura'><CourseCards image={'./images/lectura.png'}/></Link>
              <Link to='/Escritura'><CourseCards image={'./images/escritura.png'} /></Link>
              <Link to='/Cultura'><CourseCards image={'./images/cultura.png'}/></Link>
              <Link to='/Premium'><CourseCards image={'./images/premium.png'}/></Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Curso;
