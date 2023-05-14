import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Link from 'next/link';
import Image from 'next/image';

// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/Nav.module.css';

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
      <Navbar className='navbar' bg="light" expand={false}>
        <Container>
          <Navbar.Brand href="/" className={styles['logo-nav']} alt='Logo image link to home'><Image src='/images/logoname.webp' width={938} height={493} alt="Wild Beginnings logo for navigation" /></Navbar.Brand>
          <Navbar.Toggle className={styles['navbar-toggler']} aria-controls="offcanvasNavbar" aria-label="Toggle collapsible navigation"/>
          <Nav
            className={styles['desktop_links']}
            style={{ maxHeight: '100px' }}
          >
            {
              NavLink.map(navLink => <Link className={styles['nav-link']} href={navLink?.link} key={navLink?.name} alt={navLink?.name}>{navLink?.name}</Link>)
            }
          </Nav>

          {/* Mobile slide */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className={styles['navbar-toggler']}
            aria-label="Toggle collapsible navigation"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {
                  NavLink.map(navLink => <Nav.Link className={styles['nav-link']} href={navLink?.link} key={navLink?.name} alt={navLink?.name}>{navLink?.name}</Nav.Link>)
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  );
}

export default Navigation;