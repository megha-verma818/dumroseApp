import React, { useState } from 'react';
import img3 from '../img/buy.png';
import amount from '../img/amount.png';
import wallet from '../img/wallet.png';
import ready from '../img/ready.png';
import minimize from '../img/minimize.png';
import maxmize from '../img/maxmize.png';
import close from '../img/close.png';
import copy from '../img/copy.svg';
import homeContImg from '../img/home-content-img.png';


const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMaximize = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      {isVisible && (
        <div className={`contentFrame ${isZoomed ? 'zoomed' : ''}`}>
          <div className='contentFrame-topBar d-flex align-items-center justify-content-between gap-3 flex-wrap'>
            <div className='title'><img src={img3} alt="Home" /> How To Buy</div>
            <div className="topRight">
              <button><img src={minimize} alt="" width={40} /></button>
              <button onClick={handleMaximize}><img src={maxmize} alt="" width={40}/></button>
              <button onClick={handleClose}><img src={close} alt="" width={40} /></button>  
            </div>
          </div>
          <div className="contentFrame-details">
            <div className="howtoBuy">
                <div className="section-title text-center">
                    <h2>Contact Us</h2>
                    <p>Send us a message on twitter or email and if Rose lets us out of the basement we will get back to you asap.</p>
                    </div>
                    <div className='text-center'><a href="https://google.com" target="_blank" class="boxed-btn">Telegram</a><a href="https://google.com" target="_blank" class="boxed-btn">Twitter</a></div>
                   
            </div>
          </div>
        </div>
        
      )}
      
    </>
  );};
export default Contact;
