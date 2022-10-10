import React from 'react';
import { Link } from 'react-router-dom';
import MenuCards from '../../../components/home/MenuCards';
//Styles
import "../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Vocabulary = () => {
  return (
    <div>
      <div className="album py-5">
      <div className="container">
        <Link to={'/Curso'}>
          <div className="btn btn-outline-primary mb-2 align-center" variant="dark"><FontAwesomeIcon icon={faArrowLeft} className="flechaMenu"/></div>
        </Link>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <MenuCards link={'PartesDelCuerpo'} section={'Vocabulario'} exercises={'Ejercicios'} image={'./images/cuerpo.png'}/>
          {/* <Link to='/Familia'></Link> */}<MenuCards section={'Vocabulario'} exercises={'Ejercicios'} image={'./images/procesando.png'}/>
          {/* <Link to='/Casa'></Link> */}<MenuCards section={'Vocabulario'} exercises={'Ejercicios'} image={'./images/procesando.png'}/>
          {/* <Link to='/Viaje'></Link> */}<MenuCards section={'Vocabulario'} exercises={'Ejercicios'}  image={'./images/procesando.png'}/>
          {/* <Link to='/Cultura'></Link> */}<MenuCards section={'Vocabulario'} exercises={'Ejercicios'} image={'./images/procesando.png'}/>
          {/* <Link to='/Otros'></Link> */}<MenuCards section={'Vocabulario'} exercises={'Ejercicios'}  image={'./images/procesando.png'}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Vocabulary;
