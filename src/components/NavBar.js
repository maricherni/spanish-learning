import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
} from "react-bootstrap";
import { logout } from "../lib/firebase/firebase-functions";
//Styles
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" className="w-25" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto me-5" style={{ maxHeight: "100px" }} navbarScroll>
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
            <Nav.Link href="/Login"><FontAwesomeIcon icon={faUser} className="icon"/></Nav.Link>
            <span className="align-bottom"><FontAwesomeIcon icon={faRightFromBracket} className="icon" onClick={()=>logout()}/></span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;


        
