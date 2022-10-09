import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Processing = () => {

  return (
    <div>
      <h3 className='processing ms-4 mt-2'> EN CONSTRUCCIÓN</h3>
      <Link to={"/Curso"}>
        <div className="btn btn-outline-primary mb-2 mt-2 ms-3 align-center" variant="dark">
          <FontAwesomeIcon icon={faArrowLeft} className="flechaMenu" />
        </div>
      </Link>
    </div>
  );
};

export default Processing;