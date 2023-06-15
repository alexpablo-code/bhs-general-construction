import '../styles/about.css';
const about1 = require('../components/images/about_1.png');
const about2 = require('../components/images/about_2.png');

const About = () => {
    return (
        <section className='about-section' id='about'>
            <img src={about1} alt="about-img" className='about-img about1'/>
            <div className="about-box">
                <h3>About Us</h3>
                <p>Excellent Customer Service <br/>At our company, we strive to make each and every customer happy with our services. For this reason, we put a lot of effort into every decorative concrete project, installation, or repair job in a timely and professional manner. This helps us keep our numerous clients satisfied.</p>

            </div>
            <img src={about2} alt="about-img" className='about-img about2'/>
        </section>
    );
}

export default About;
