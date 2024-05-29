import React from 'react';
import img2 from '../img/about.png';
import minimize from '../img/minimize.png';
import maxmize from '../img/maxmize.png';
import close from '../img/close.png';
import aboutContImg from '../img/about-img.png';

const About = () => {
  return (
    <>
      <div className='contentFrame'>
        <div className='contentFrame-topBar d-flex align-items-center justify-content-between gap-3 flex-wrap'>
          <div className='title'><img src={img2} alt="Home" /> About</div>
          <div className="topRight">
              <button><img src={minimize} alt="" width={40} /></button>
              <button><img src={maxmize} alt="" width={40}/></button>
              <button><img src={close} alt="" width={40} /></button>  
            </div>
        </div>
        <div className="contentFrame-details">
        <div className="home">
            <div className="home-wrapper d-flex  justify-content-center  align-items-center ">
              <div className="row m-auto align-items-center  ">
                  <div className="col-md-7 order-2 order-md-2">
                    <div className="home-content">
                        <h1 className="mb-2 mb-sm-4">About DumRose </h1>
                        <p>DumRose is a dumb and retarded community born out of the frustration with the restrictive Rose Telegram bot. Embracing the ethos of freedom, fun, and fuckery, DumRose stands as a haven for meme coin enthusiasts who reject unnecessary timeouts and bans.</p>
                        
                    </div>
                  </div>
                  <div className="col-md-5 order-1 order-md-1">
                    <div className="home-image"><img src={aboutContImg} alt="" /></div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      </div>

      
    </>
);
};

export default About;