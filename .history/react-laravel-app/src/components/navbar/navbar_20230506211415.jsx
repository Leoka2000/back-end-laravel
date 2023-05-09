import React, { useState, useRef } from 'react'
import { Link } from 'react-scroll'

import './navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const navRef = useRef();

  return (
    <>
      <nav className='navbar'>
       
      </nav>
    </>
  );
}

export default Navbar
