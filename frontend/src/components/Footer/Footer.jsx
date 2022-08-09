import "./Footer.css";
import React from "react";


const Footer = () => {
  return (
    <div class="footer-basic">
      <footer>
        
        <ul class="list-inline">
          <li class="list-inline-item">
          
            <a href="/">Home</a>
            
          </li>
          <li class="list-inline-item">
          
            <a href="/welcome">Services</a>
            
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
