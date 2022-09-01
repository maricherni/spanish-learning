import React from 'react';
import { logout } from '../lib/firebase/firebase-functions';

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
              <li className="nav-item">
                <a className="nav-link fs-6 fw-bold text-light" href="/Ejercicios">EJERCICIOS</a>
              </li>
              <li className="nav-item ms-4 ">
                <a className="nav-link fs-6 fw-bold text-light" href="/SignUp">Sign Up</a>
              </li>
              <li className="nav-item ms-4 me-3">
                <a className="nav-link fs-6 fw-bold text-light" href="/User">User</a>
              </li>
              <li className="nav-item ms-4 me-3">
                <a className="nav-link fs-6 fw-bold text-light" href="/AreaClientes">AREA CLIENTES</a>
              </li>
              {/* -- Login button -- */}
              <button type="button" className="btn btn-secondary text-white-50 fs-6 fw-bold ps-4 pe-4 ms-3 me-5 shadow">LOGIN</button>
              <button type="button" className="btn btn-secondary text-white-50 fs-6 fw-bold ps-4 pe-4 ms-3 me-5 shadow"onClick={()=>logout()}>Log Out</button>
            </ul>
          </div>
        </div>
    </nav>
        
    )
}

export default NavBar;

