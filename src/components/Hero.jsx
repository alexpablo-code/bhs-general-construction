import '../styles/hero.css';
import Navbar from './Navbar';
import { HashLink } from "react-router-hash-link";

const Hero = () => {
    return (
        <div className='hero-bg'>
            <Navbar/>
            <div className='hero-section'>
                <div className='hero-content-sec'>
                    <h2>We specialize in all <br />your structural needs</h2>
                    <p>Concrete Construction Contractors Kitsap County and the <br />Greater Seattle Area</p>
                    <button className='hero-button'><HashLink smooth to='#contact'>Get a free estimate</HashLink></button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
