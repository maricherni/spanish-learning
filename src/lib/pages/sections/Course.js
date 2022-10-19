import React from "react";
import MenuCards from "../../../components/MenuCards/MenuCards";
import { Link } from "react-router-dom";
//Styles
import "../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Curso = () => {
  return (
    <div>
        <div className="album py-5">
          <div className="container">
            <Link to={'/'}>
              <div className="btn btn-outline-primary mb-2 align-center" variant="dark"><FontAwesomeIcon icon={faArrowLeft} className="flechaMenu"/></div>
            </Link>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Link to='/Vocabulario'><MenuCards image={'./images/vocabulario.png'}/> </Link>
              <Link to='/Gramatica'><MenuCards image={'./images/gramatica.png'} /></Link>
              <Link to='/Lectura'><MenuCards image={'./images/lectura.png'}/></Link>
              <Link to='/Escritura'><MenuCards image={'./images/escritura.png'} /></Link>
              <Link to='/Cultura'><MenuCards image={'./images/cultura.png'}/></Link>
              <Link to='/Premium'><MenuCards image={'./images/premium.png'}/></Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Curso;
