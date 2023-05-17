import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <ul className='permaLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><FaFacebookF/></a>
        <a href=""><AiFillInstagram/></a>
        <a href=""><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Anton Bertrand. All Rights Reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer;