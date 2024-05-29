import React, { useState, useEffect } from 'react';
import img1 from '../img/home.png';
import img2 from '../img/about.png';
import menu from '../img/menu.png';

const Footer = ({ isMenuOpen }) => {
  const [footerImg, setFooterImg] = useState(img1);

  useEffect(() => {
    setFooterImg(isMenuOpen ? img2 : img1);
  }, [isMenuOpen]);

  return (
    <>
      <footer className="footer d-sm-flex justify-content-center justify-content-sm-between align-items-center">
        <div className="footer-left justify-content-center justify-content-sm-start d-flex align-item-center gap-2">
          <button className="menu">
            <img src={menu} alt="Menu Icon" width={26} /> Menu
          </button>
          <button className="pageName d-inline-flex align-items-center flex-wrap gap-2">
            <img src={footerImg} alt="" width={26} /> Home
          </button>
        </div>
        <div className="footer-right d-none d-sm-block">
          <p className="copyright">COPYRIGHT © 2024 $DumRose.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
