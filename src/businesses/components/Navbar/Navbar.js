// navbar docs: https://react-bootstrap.github.io/components/navbar/

import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <ul id="nav">
          <li><Link to="/Feed">Feed</Link></li>
          <li><Link to="/Analytics">Analytics</Link></li>
          <li><Link to="/Customize">Customize</Link></li>
        </ul>
      </>);
}
 
export default Navbar;