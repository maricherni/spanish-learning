import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
} from "react-bootstrap";
/* import { logout } from "../lib/firebase/firebase-functions"; */
//Styles
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" className="w-25 ms-5" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: "100px" }}>
            <NavDropdown title="Curso" id="cursoDropdown">
              <NavDropdown.Item href="/Vocabulario">
                Vocabulario
              </NavDropdown.Item>
              <NavDropdown.Item href="/Gramatica">Gramática</NavDropdown.Item>
              <NavDropdown.Item href="/Lectura">Lectura</NavDropdown.Item>
              <NavDropdown.Item href="/Escritura">Escritura</NavDropdown.Item>
              <NavDropdown.Item href="/Cultura">Cultura</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Premium">
                Hazte Premium  
                <img src="./images/Premium.gif" alt="" width="40" />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contacto
            </Nav.Link>
            <Nav.Link><FontAwesomeIcon icon={faUser} className="icon"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;


//         {/* -- Login / Logout buttons -- */}
//         {/* <Link to={'/Login'}><button type="button" className="btn btn-light text-dark-50 fs-6 fw-bold ps-4 pe-4 ms-3 me-2 shadow">Entrar</button></Link>
//           <button type="button" className="btn btn-light text-dark-50-50 fs-6 fw-bold ps-3 pe-3 ms-3 shadow"onClick={()=>logout()}>Cerrar Sesión</button> */}
//       

