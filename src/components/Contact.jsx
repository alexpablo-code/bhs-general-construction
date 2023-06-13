import '../styles/contact.css';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaLocationArrow} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="contact-section" id='contact'>
            <h3>Contact us for a free estimate</h3>
            <div className='contact-line'>
                <FaPhoneAlt className='contact-icons'/> <p>(360) 857-0748</p>
            </div>
            <div className='contact-line'>
                <FaLocationArrow className='contact-icons'/><p>2196 California Ave E, Port Orchard, WA 98366</p>
            </div>
            <div className='contact-line'>
                <FaClock className='contact-icons'/> <p>Mon - Sat 7 am to 5pm <br/>Sunday Closed </p>
            </div>
        </section>
    );
}

export default Contact;
