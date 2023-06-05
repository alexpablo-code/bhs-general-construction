import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from "react";

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <h1>BHS</h1>
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
