import React, { useState } from 'react';
import {
  Alert,
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
  } from 'reactstrap';
  import Main from './main.jsx' ;

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="modal-body">    
      <Navbar className="navbar fixed-top navbar-expand-md scrolling-navbar" light expand="md">
        <NavbarBrand href="#">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/aldinoAlfath/myCalculator" target="_blank">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#">
                  Halaman Awal
                </DropdownItem>
                <DropdownItem href="#Aldino">
                  tentang saya
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="http://localhost:3000/">
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;