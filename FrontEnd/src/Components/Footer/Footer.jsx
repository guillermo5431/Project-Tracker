import React from 'react'
import '../../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-logo'>
          <a href='#'>Logo</a>
        </div>
        <ul className='footer-links'>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/ProjectStatus'>Project Status</Link></li>
            <li><Link to ='/Concerns'>Submit a Concern</Link></li>
            <li><Link to ='/FAQ'>FAQ</Link></li>
            <li><Link to ='/AboutUs'>About Us</Link></li>
            <li><Link to ='/ContactUs'>Contact Us</Link></li>
            <li><Link to ='/Login-SignUp'>Login/SignUp</Link></li>
        </ul>
        <div className='footer-social-media'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Company Name, All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer