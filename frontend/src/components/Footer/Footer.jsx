import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer-basic">
      <footer>
        
        <ul class="list-inline">
          <li class="list-inline-item">
          <Link to="/">
            <a href="#">Home</a>
            </Link>
          </li>
          <li class="list-inline-item">
          <Link to="/welcome">
            <a href="#">Services</a>
            </Link>
          </li>
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p class="copyright">ASYMBOL © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
