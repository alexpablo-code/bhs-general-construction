import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from "react";
const logo = require('./images/business_logo.png');

const Navbar = () => {
    const navRef = useRef();
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header className="site-header">
            <img src={logo} alt="site-logo" className="site-logo" onClick={() => navigate('/')}/>
            <div>
                <nav ref={navRef} className="site-nav">
                    <HashLink smooth to='/#about' onClick={showNavbar}>About</HashLink>
                    <Link to={'/services'} >Services</Link>
                    <Link to={'/projects'} >Our Projects</Link>
                    <HashLink smooth to='/#contact' onClick={showNavbar}>Contact</HashLink>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    );
}

export default Navbar;
