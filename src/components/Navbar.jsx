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
        <header>
            <img src={logo} alt="site-logo" className="site-logo" onClick={() => navigate('/')}/>
            <nav ref={navRef}>
                <HashLink smooth to='/#about'>About</HashLink>
                <Link to={'/services'} >Services</Link>
                <Link to={'/gallery'} >Gallery</Link>
                <Link to={'/#'} >Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;
