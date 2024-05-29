import React, { useState } from 'react';
import img1 from '../img/home.png';
import minimize from '../img/minimize.png';
import maxmize from '../img/maxmize.png';
import close from '../img/close.png';
import homeContImg from '../img/home-content-img.png';


const Home = () => {
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
            <div className='title'><img src={img1} alt="Home" /> Home</div>
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
                      <h1 className="mb-2 mb-sm-4">Welcome to DumRose! </h1>
                      <p>Rose was a relentless enforcer, handing out timeouts and bans with cold, mechanical precision. Many degens found themselves silenced and exiled for the most trivial of reasons. The villagers were fed up with Rose's demonic measures. Thus, a movement was born: the DumRose Revolution.</p>
                      <a href="#" className="boxed-btn">Get Banned</a>
                    </div>
                  </div>
                  <div className="col-md-5 order-1 order-md-2">
                    <div className="home-image"><img src={homeContImg} alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )}
      
    </>
  );};
export default Home;
