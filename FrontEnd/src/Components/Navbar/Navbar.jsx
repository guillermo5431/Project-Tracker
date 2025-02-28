import React, {useState} from 'react'
import '../../Styles/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }

  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <a href='#'>Logo</a>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/ProjectStatus'>Project Status</Link></li>
            <li><Link to ='/Concerns'>Submit a Concern</Link></li>
            <li><Link to ='/FAQ'>FAQ</Link></li>
            <li><Link to ='/AboutUs'>About Us</Link></li>
            <li><Link to ='/ContactUs'>Contact Us</Link></li>
            <li><Link to ='/Login-SignUp'>Login/SignUp</Link></li>
        </ul>
        <div className='hamburger' onClick={toggleMenu}>
            <span>&#9776;</span>
        </div>

    </nav>
  )
}

export default Navbar