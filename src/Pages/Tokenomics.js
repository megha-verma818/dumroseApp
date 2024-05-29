import React, { useState } from 'react';
import img1 from '../img/home.png';
import minimize from '../img/minimize.png';
import maxmize from '../img/maxmize.png';
import close from '../img/close.png';
import chartimg from '../img/chart-DN.png';


const Tokenomics = () => {
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
            <div className='title'><img src={img1} alt="Home" /> Tokenomics</div>
            <div className="topRight">
              <button><img src={minimize} alt="" width={40} /></button>
              <button onClick={handleMaximize}><img src={maxmize} alt="" width={40}/></button>
              <button onClick={handleClose}><img src={close} alt="" width={40} /></button>  
            </div>
          </div>
          <div className="contentFrame-details">
            <div className="home">
              <div className="home-wrapper d-flex  justify-content-center  align-items-center ">
                <div className="row m-auto align-items-center  ">
                  <div className="col-md-7 order-2 order-md-1">
                    <div className="home-content">
                      <h1 className="mb-2 mb-sm-4">Tokenomics </h1>
                      <p>DumRose's tokenomics are designed to ensure sustainability and growth, with a total supply of 1 billion. Our allocation strategy includes community rewards, development funds, and liquidity pools to foster a thriving and robust ecosystem.</p>
                    </div>
                  </div>
                  <div className="col-md-5 order-1 order-md-2">
                    <div className="home-image"><img src={chartimg} alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )}
      
    </>
  );};
export default Tokenomics;
