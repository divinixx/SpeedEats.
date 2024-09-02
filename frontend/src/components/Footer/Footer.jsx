import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="" />
           */}
          <h1>SpeedEats.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            ratione accusamus corporis natus incidunt fuga non sit. Tempore ea
            dolorem ab odio, ducimus dolorum, neque qui fugiat adipisci beatae
            doloremque!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9634742440</li>
            <li>contact@speedeats.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 ©️ SpeedEats. - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
