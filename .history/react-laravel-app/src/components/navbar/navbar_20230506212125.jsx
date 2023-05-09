import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import './navbar.css';

const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
       <img src={logo}/>
      </nav>
    </>
  );
}

export default Navbar
