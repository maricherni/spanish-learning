import React from 'react';
import NavBar from "../../../components/NavBar";
import { Link } from 'react-router-dom';
import HomeCards from '../../../components/home/HomeCards';
import { vocabulario } from '../../../constants/areas_aprendizaje';

const Vocabulary = () => {
  return (
    <div>
      <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Link to={'/Vocabulario/PartesDelCuerpo'}><HomeCards description={vocabulario.partesCuerpo} image={'./images/cuerpo.png'}/> </Link>
          {/* <Link to='/Familia'></Link> */}<HomeCards description={vocabulario.familia} image={'./images/procesando.png'}/>
          {/* <Link to='/Casa'></Link> */}<HomeCards description={vocabulario.casa} image={'./images/procesando.png'}/>
          {/* <Link to='/Viaje'></Link> */}<HomeCards description={vocabulario.viaje} image={'./images/procesando.png'}/>
          {/* <Link to='/Cultura'></Link> */}<HomeCards description={vocabulario.comida} image={'./images/procesando.png'}/>
          {/* <Link to='/Otros'></Link> */}<HomeCards description={vocabulario.otros} image={'./images/procesando.png'}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Vocabulary;
