import React from 'react';
import { logout } from '../lib/firebase/firebase-functions';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          {/* -- Brand --*/}
          <a className="navbar-brand" href="/">
              <img src="../images/logo.png" className="w-25" alt="Logo Bookmark"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-image mx-3"><img src="./Imagenes/icon-hamburger.svg" alt=""/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* -- Options -- */}         
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item ms-4 ">
                <a className="nav-link fs-6 fw-bold text-light" href="/SignUp">Registrarse</a>
              </li>
              <li className="nav-item ms-4 ">
                <a className="nav-link fs-6 fw-bold text-light" href="/Pago">Pago</a>
              </li>
              {/* <li className="nav-item ms-4 me-3">
                <a className="nav-link fs-6 fw-bold text-light" href="/AreaClientes">AREA CLIENTES</a>
              </li> */}
              {/* -- Login / Logout buttons -- */}
              <Link to={'/Login'}><button type="button" className="btn btn-light text-dark-50 fs-6 fw-bold ps-4 pe-4 ms-3 me-2 shadow">Entrar</button></Link>
              <button type="button" className="btn btn-light text-dark-50-50 fs-6 fw-bold ps-3 pe-3 ms-3 shadow"onClick={()=>logout()}>Cerrar Sesión</button>
            </ul>
          </div>
        </div>
    </nav>
        
    )
}

export default NavBar;

