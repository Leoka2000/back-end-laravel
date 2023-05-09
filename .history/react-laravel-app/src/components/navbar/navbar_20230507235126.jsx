import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {SiGooglescholar} from 'react-icons/si'

import './navbar.css';

const Navbar = () => {

  
  return (
    <nav className='navbar'>
      <Link to='/'><SiGooglescholar/><h1>ScholarSearch</h1></Link>
    </nav>
  );
};

export default Navbar;
