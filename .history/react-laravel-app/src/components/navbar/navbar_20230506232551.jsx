import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  
  return (
    <nav className='navbar'>
      <Link to='/'><img src={logo} alt="Logo" /></Link>
    </nav>
  );
};

export default Navbar;
