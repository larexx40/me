import React from 'react';
import "./footer.css";
import { FaLinkedIn } from 'react-icons/fa';
import { FaGitHub } from 'react-icons/fa';
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
  return (
    <footer id="footer__">
      <a href="#footer__" className='footer_logo'>RESMAN</a>

      <ul className='permalinks'>
        <li><a href="#home__">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/rokeebolatunji/"><FaLinkedIn /></a>
        <a href="https://github.com/larexx40"><FaGitHub /></a>
        <a href="https://twitter.com/lanreTunji1"><IoLogoTwitter /></a>
        
      </div>

      <div className="footer_copyright">
        <small>&copy; Larexx Technologies. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer