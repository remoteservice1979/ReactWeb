import React from 'react';
import { Link } from 'react-router-dom';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header style={{ backgroundColor: 'chartreuse' }}>
    <nav>
      <ul style={{ display:'flex' }}>
        <li style={{ width:'25%' }}><Link to='/'>Home</Link></li>
        <li style={{ width:'25%' }}><Link to='/date'>Data Ranage</Link></li>
        <li style={{ width:'25%' }}><Link to='/string'>String</Link></li>
        <li style={{ width:'25%' }}><Link to='/Calculator'>Calculator</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
