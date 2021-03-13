import React from "react";
import logo from "../image/logo.svg";
import { useGlobalContext } from "../context/context";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";

const NavBars = () => {
  const {
    openSidebar,
    isSidebarOpen,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
  } = useGlobalContext();

  const handleEvent = (e) => {
    if (!e.target.classList.contains("btn-link")) {
      closeSubmenu();
    }
  };
  return (
    <div>
      <Navbar className="nav-bar" expand="md">
        <NavbarBrand>
          <img src={logo} alt="strip" />
        </NavbarBrand>
        <NavbarToggler onClick={openSidebar} className="toggler">
          <FaBars />
        </NavbarToggler>
        <Collapse isOpen={isSidebarOpen} navbar className="sidebar">
          {isSidebarOpen && <SideBar />}
        </Collapse>
        <Nav
          className="me-auto"
          navbar
          className="items"
          onMouseOver={handleEvent}>
          <NavItem>
            <button className="btn-link" onMouseOver={openSubmenu}>
              products
            </button>
          </NavItem>
          <NavItem>
            <button className="btn-link" onMouseOver={openSubmenu}>
              developers
            </button>
          </NavItem>
          <NavItem>
            <button className="btn-link" onMouseOver={openSubmenu}>
              company
            </button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBars;
