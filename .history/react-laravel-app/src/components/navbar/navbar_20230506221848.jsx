import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { AiOutlineHome } from 'react-icons/ai'
import './navbar.css';

const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
        <img src={logo} />
        <Link style={{ textDecoration: 'none' }} to='/'><AiOutlineHome /><p>Home</p></Link>
      </nav>
    </>
  );
}

export default Navbar
