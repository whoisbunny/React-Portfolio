import React from 'react'
import './footer.css'
import {FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter } from 'react-icons/io'
import {FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__logo">

     <a href="#">whoisbunny</a>
      </div>
     <ul className="paralinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#service">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"> <IoLogoTwitter/></a>
      <a href="https://github.com"> <FaGithub/></a>

     </div>
     <div className="footer__copyright">
      <small>&copy; whoisbunny . All rights reserved. </small>
     </div>
    </footer>
  )
}

export default Footer
