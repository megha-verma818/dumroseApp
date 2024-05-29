import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/home.png';
import img2 from '../img/about.png';
import img3 from '../img/buy.png';
import img4 from '../img/tokenomics.png';
import img5 from '../img/chart.png';
import img6 from '../img/faq.png';
import img7 from '../img/contact.png';

const Header = () => {
  return (
    <>
    
            <div className="navitem">
            <nav>
                <ul>
                <li><Link to="/">  <img src={img1} alt="home" height="40px" /> Home</Link></li>
                <li><Link to="/About">  <img src={img2} alt="About" height="40px" /> About</Link></li>
                <li><Link to="/Howtobuy">  <img src={img3} alt="Howtobuy" height="40px" /> How to Buy</Link></li>
                <li><Link to="/Tokenomics">  <img src={img4} alt="Tokenomics" height="40px" /> tokenomics</Link></li>
                <li><Link to="/Chart">  <img src={img5} alt="home" height="40px" /> Chart</Link></li>
                <li><Link to="/Faq">  <img src={img6} alt="home" height="40px" /> FAQ</Link></li>
                <li><Link to="/Contact"><img src={img7} alt="home" height="40px" /> Contact</Link></li>
                </ul>
            </nav>
              
            </div>
        
      
  </>
  );
};

export default Header;
