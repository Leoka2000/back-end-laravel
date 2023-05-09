import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import './navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const navRef = useRef();

  return (
    <>
      <nav className='navbar'>
       <img src={logo}/>
      </nav>
    </>
  );
}

export default Navbar
