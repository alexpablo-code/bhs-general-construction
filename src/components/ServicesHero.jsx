import Navbar from './Navbar';
import '../styles/servicesHero.css';

const ServicesHero = () => {
    return (
        <div className='s-hero-bg'>
            <Navbar/>
            <div className='s-hero-section'>
                <div className='s-hero-content-sec'>
                    <h2>Our Services</h2>
                    <p>Do you want to improve the condition of your concrete surface but you don't know how? If concrete projects are way too stressful and daunting, choosing our company is the right thing to do. BHS Structures is conveniently based in Port Orchard, WA, and we can provide you with the following services:</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesHero;
