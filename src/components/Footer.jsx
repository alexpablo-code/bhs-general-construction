import React from "react";
import "../styles/footer.css";
import { useNavigate } from "react-router-dom";
const logo = require("../components/images/blk_font_logo.png");

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <img
        src={logo}
        alt="site-logo"
        className="footer-logo"
        onClick={() => navigate("/")}
      />
      <p>©️ 2023 BHS General Construction. All rights reserved</p>
      <p>
        Website by:{" "}
        <a href="https://www.instagram.com/the.alexpablo">Alex Pablo</a>
      </p>
    </footer>
  );
};

export default Footer;
