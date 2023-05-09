import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import './navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" />
      
    </nav>
  );
};

export default Navbar;
