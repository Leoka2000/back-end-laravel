import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';
import './navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  
  return (
    <nav className='navbar'>
      {pathname === '/' ? (
        <Link style={{ textDecoration: 'none' }} to='/'><AiOutlineHome /></Link>
      ) : (
        <Link style={{ textDecoration: 'none' }} to='/'><SiGooglescholar/><h1>ScholarSearch</h1></Link>
      )}
    </nav>
  );
};

export default Navbar;


