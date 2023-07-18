import '../styles/footer.css'
import { useNavigate } from 'react-router-dom';
const logo = require('../components/images/blk_font_logo.png');

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <img src={logo} alt="site-logo" className="footer-logo" onClick={() => navigate('/')}/>
            <p>©️ Copyright 2023. All rights reserved</p>
            <p>Website by: Alex Pabloooooooooooo2222222</p>
        </footer>
    );
}

export default Footer;
