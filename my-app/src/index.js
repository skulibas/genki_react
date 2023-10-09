import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Nav, Navbar, NavLink } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar bg="light" expand="sm">
    <Nav className="me-auto">
      <Image src={require('./images/logo_icontext.png')} alt="Logo" width="80%" className="mx-3"/>
    </Nav>
    <Nav className="justify-content-end">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Menu</Nav.Link>
      <Nav.Link>Locations</Nav.Link>
      <Nav.Link>Shop</Nav.Link>
      <Nav.Link>About</Nav.Link>
      <Nav.Link>Careers</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
  </Navbar>
);

const Genki = () => (
  <Container fluid>
    <TopMenu />
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Genki />);