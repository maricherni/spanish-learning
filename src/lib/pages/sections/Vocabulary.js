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
          <Link to={'/Vocabulario/PartesDelCuerpo'}><HomeCards description={vocabulario.partesCuerpo} /> </Link>
          <Link to='/Familia'><HomeCards description={vocabulario.familia} /></Link>
          <Link to='/Casa'><HomeCards description={vocabulario.casa} /></Link>
          <Link to='/Viaje'><HomeCards description={vocabulario.viaje} /></Link>
          <Link to='/Cultura'><HomeCards description={vocabulario.comida} /></Link>
          <Link to='/Otros'><HomeCards description={vocabulario.otros} /></Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Vocabulary;
