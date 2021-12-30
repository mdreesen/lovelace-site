import React, { Suspense } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

import 'bootstrap/dist/css/bootstrap.css';
import './nav.css';

// import logo
import logo from '../../images/logo.webp'

const Navigation = () => {

  const NavLink = [
    {
      "name": "Home",
      "link": "/"
    },
    {
      "name": "About",
      "link": "/about"
    },
    {
      "name": "Services",
      "link": "/services"
    },
    {
      "name": "Contact",
      "link": "/contact"
    }
  ]

  return (
    <Suspense fallback={<div />}>
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Brand href="#"><img className='logo-nav' src={logo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Nav
            className='desktop_links'
            style={{ maxHeight: '100px' }}
          >
            {
              NavLink.map(link => <Nav.Link href={`/${link?.link}`}>{link?.name}</Nav.Link>)
            }
          </Nav>

          {/* Mobile slide */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {
                  NavLink.map(link => <Nav.Link href={`/${link?.link}`}>{link?.name}</Nav.Link>)
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Suspense>
  );
}

export default Navigation;