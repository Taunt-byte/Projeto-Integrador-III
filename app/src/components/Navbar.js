import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function navbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="#home">Jhun</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Início</Nav.Link>
          <Nav.Link href="#link">Sobre</Nav.Link>
          <Nav.Link href="#link">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
