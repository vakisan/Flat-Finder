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
      <Navbar color="light" light expand="md">
      <Container>
      <NavbarBrand className="mr-lg-5 navbar-brand-post" to="/" tag={Link}>
        FlatFinder
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" align-items-lg-center" navbar>
            <NavItem>
              <NavLink to="/Listing" tag={Link}>Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Register" tag={Link}>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/About" tag={Link}>Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Listing" tag={Link}>Logout</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNavbar;