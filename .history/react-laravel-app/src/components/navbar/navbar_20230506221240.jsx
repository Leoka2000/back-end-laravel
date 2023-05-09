import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {AiOutlineHome} from 'react-icons/ai'
import './navbar.css';

const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
       <img src={logo}/>
       <div className='single-btn-wrapper'>
                    <Link style={{textDecoration: 'none'}} to='/'><AiOutlineHome/><p>home</p></Link>
                </div>
      </nav>
    </>
  );
}

export default Navbar
