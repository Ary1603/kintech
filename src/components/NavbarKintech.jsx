import React, { useEffect, useRef } from "react";
import video from "../assets/videos/prueba.mp4";
import logo from "../assets/images/kintech_logo.png";
import logoLetters from "../assets/images/kintech_logo_letters.png";

function NavbarKintech() {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <nav>
      <div className="container">
        <svg height="8%" width="2%">
          <clipPath id="text-overlay">
            <text id="navbar-logo-name" x="20%" y="14%" fill="red">
              Kintech
            </text>
          </clipPath>
        </svg>
         
        <video src={video} ref={vidRef} muted loop></video>
      </div>

      <ul className="navbar-links">
        <a href="#inicio">
          <li className="links">Inicio</li>
        </a>
        <a href="#servicios">
          <li className="links">Servicios</li>
        </a>
        <a href="#nosotros">
          <li className="links">Nosotros</li>
        </a>
        <a href="#contactanos">
          <li className="links">Contáctanos</li>
        </a>
      </ul>
    </nav>
  );
}

//Bootstrap navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function BootstrapNavbar() {

  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Navbar style={{backgroundColor: 'transparent !important', width: '100% !important', display: 'flex !important'}} expand="lg">
      <Container >
        <Navbar.Brand href="#home"><div className="container">
        <svg height="30%" width="2%">
          <clipPath id="text-overlay">
            <text id="navbar-logo-name" x="100%" y="100%" fill="red">
              Kintech
            </text>
          </clipPath>
        </svg>
        <video src={video} ref={vidRef} muted loop></video>
      </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn-collapse-personalise" style={{position: 'absolute !important'}}/>
        <Navbar.Collapse id="basic-navbar-nav" className="btn-collapse-content">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Nuestros servicios</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contactanos">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//x="25%" y="20%" text
export default NavbarKintech;
