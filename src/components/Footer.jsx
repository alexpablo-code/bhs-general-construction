import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import "../styles/footer.css";
import { useNavigate } from "react-router-dom";
const logo = require("../components/images/blk_font_logo.png");




const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
       <div className="facebook-link">
          <p>Follow us</p>
          <a
             href="https://www.facebook.com/profile.php?id=100068443895794"
             className="facebook-icon">    
                <FaFacebookSquare />
                </a>
       </div>
      
    
      <div className="footer-end">
      <img
        src={logo}
        alt="site-logo"
        className="footer-logo"
        onClick={() => navigate("/")}
      />
      <p>©️ 2023 BHS General Construction. All rights resefarved</p>
      <p>
        Website by:{" "}
        <a href="https://www.instagram.com/the.alexpablo">Aldente Digitals</a>
      </p>
      </div>
    </footer>
  );
};

export default Footer;
