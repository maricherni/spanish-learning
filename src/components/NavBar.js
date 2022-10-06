import React from "react";
/* import { logout } from "../lib/firebase/firebase-functions"; */
import { Link } from "react-router-dom";
//Styles
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container" >
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src="../images/logo.png" className="w-25" alt="Logo Bookmark" />
        </a>
        {/* Hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-image mx-3">
            <img src="../images/barriga.PNG" alt="" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          {/* Options */}
          <ul className="navbar-nav ms-auto me-5" style={{alignItems:"baseline"}} >
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-bold text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Curso
              </a>
                <ul className="dropdown-menu" id="cursoDropdown">
                  <li><Link to='/Vocabulario' className="cursoLink ms-2">Vocabulario</Link></li>
                  <li><Link to='/Gramatica' className="cursoLink ms-2">Gramática</Link></li>
                  <li><Link to='/Lectura' className="cursoLink ms-2">Lectura</Link></li>
                  <li><Link to='/Escritura' className="cursoLink ms-2">Escritura</Link></li>
                  <li><Link to='/Cultura' className="cursoLink ms-2">Cultura</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link to='/Premium' className="cursoLink ms-2">Hazte Premium</Link></li>
                </ul>
            </li>
            <li className="nav-item ms-4 me-3">
              <a className="nav-link fs-6 fw-bold text-light" href="/">
                Contacto
              </a>
            </li>
            <li className="nav-item ms-4 me-3">
              <a
                className="nav-link fs-4 fw-bold text-white"
                href="/AreaClientes"
              >
               <FontAwesomeIcon icon={faUser} style={{color:"lightblue"}}/> 
              </a>
            </li>
            {/* -- Login / Logout buttons -- */}
            {/* <Link to={'/Login'}><button type="button" className="btn btn-light text-dark-50 fs-6 fw-bold ps-4 pe-4 ms-3 me-2 shadow">Entrar</button></Link>
              <button type="button" className="btn btn-light text-dark-50-50 fs-6 fw-bold ps-3 pe-3 ms-3 shadow"onClick={()=>logout()}>Cerrar Sesión</button> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
