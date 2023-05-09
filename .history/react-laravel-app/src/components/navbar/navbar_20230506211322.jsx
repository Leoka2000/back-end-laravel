import React, { useState, useRef } from 'react'

import './navbar.css'
import logo1 from '../../assets/brand/logo.png'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'

import './navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  const navbarScroll = () => {
    if (window.scrollY >= 100) {
      setNavbar(false)

    } else {
      setNavbar(true)

    }
  }

  window.addEventListener('scroll', navbarScroll)

  return (
    <>
      <nav>
       
      </nav>


    </>
  );
}

export default Navbar
