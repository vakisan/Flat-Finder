import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col
} from 'reactstrap';

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header-global">
      <Navbar expand="md" className="navbar navbar-pre navbar-light navbar-expand-lg nav-custom">
      <Container>
      <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
        FlatFinder
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" align-items-lg-center" navbar>
            <NavItem>
              <NavLink to="/" tag={Link} className="nav-link-custom">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Register" tag={Link} className="nav-link-custom">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/About" tag={Link} className="nav-link-custom">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Listing" tag={Link} className="nav-link-custom">Listing</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNavbar;