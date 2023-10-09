import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Nav, Navbar, NavLink, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, GeoAltFill, Telephone, Envelope, Globe } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="sm" className="sticky-top">
    <Nav className="me-auto">
      <Image src={require('./images/logo_icontext.png')} alt="Logo" width="80%" className="mx-3"/>
    </Nav>
    <Nav id="nav-text" className="justify-content-end mx-3">
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

const HeroSection = () => (
  <Row className="gx-0" expand="sm">
    <Col>
      <Image src={require('./images/test.png')} alt="hero-section" fluid width="100%"/>
    </Col>
  </Row>
);

const OurGalleryText = () => (
  <Container fluid>
    <Row>
      <Col id="Our-Text">
        <h1 className="text-center display-1"><strong>Our</strong></h1>
      </Col>
    </Row>
    <Row>
      <Col id="Gallery-Text">
        <h1 className="text-center display-1"><strong>Gallery</strong></h1>
      </Col>
    </Row>
  </Container>
);

const Gallery = () => (
  <Container fluid className="gx-0">
    <Row className="gx-0">
      <Col className="m-3"><Image src={require('./images/bento2.jpg')} alt="bento-image" width="100%"></Image></Col>
      <Col className="m-3"><Image src={require('./images/2.jpg')} alt="train-sushi-image" width="100%"></Image></Col>
      <Col className="m-3"><Image src={require('./images/bento.jpg')} alt="man-eating-sushi-image" width="100%"></Image></Col>
      <Col className="m-3"><Image src={require('./images/4.jpg')} alt="sushi-on-a-chopstick-image" width="100%"></Image></Col>
    </Row>
    <Row className="gx-0">
      <Col className="m-3"><Image src={require('./images/5.jpg')} alt="person-showing-plates-of-sushi-image" width="100%"></Image></Col>
      <Col className="m-3"><Image src={require('./images/6.jpg')} alt="fried-crab?-sushi-image" width="100%"></Image></Col>
      <Col className="m-3"><Image src={require('./images/7.jpg')} alt="corn-ramen-image" width="100%"></Image></Col>
      <Col className="m-3"><Image src={require('./images/1.jpg')} alt="man-showing-udon-on-chopstick-image" width="100%"></Image></Col>
    </Row>
  </Container>
);

const BottomMenu = () => (
  <footer>
    <Container className="gx-0">
      <Row className="gx-0">
          <Col>
            <p className="fs-5 mt-3">FIND US ON SOCIAL MEDIA</p>
            <div id="socials" className="m-3">
              <Nav.Link className="p-1"><Instagram className="mx-2"/>Instagram</Nav.Link>
              <Nav.Link className="p-1"><Facebook className="mx-2"/>Facebook</Nav.Link>
              <Nav.Link className="p-1"><Twitter className="mx-2"/>Twitter</Nav.Link>
            </div>
          </Col>
          <Col>
            <p className="fs-5 mt-3">CORPORATE INFO</p>
            <div id="socials" className="m-3">
              <Nav.Link className="p-1"><GeoAltFill className="mx-2"/>677 Ala Moana Blvd #602, Honolulu, HI 96813</Nav.Link>
              <Nav.Link className="p-1"><Telephone className="mx-2"/>(808) 523-3315</Nav.Link>
              <Nav.Link className="p-1"><Envelope className="mx-2"/>info@genkisushiusa.com</Nav.Link>
              <Nav.Link className="p-1"><Globe className="mx-2"/>genkisushiusa.com</Nav.Link>
            </div>
         </Col>
      </Row>
    </Container>
  </footer>
);
const Genki = () => (
  <Container fluid className="gx-0">
    <TopMenu />
    <HeroSection />
    <OurGalleryText />
    <Gallery />
    <BottomMenu />
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Genki />);