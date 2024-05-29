import React, { useState } from 'react';
import img3 from '../img/buy.png';
import chart1 from '../img/chart1.png';

import minimize from '../img/minimize.png';
import maxmize from '../img/maxmize.png';
import close from '../img/close.png';
import tab1 from '../img/tab1.png';
import tab2 from '../img/tab2.png';
import tab3 from '../img/tab3.png';
import icon1 from '../img/icon1.png';


const Chart = () => {
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
            <div className='title'><img src={img3} alt="Home" /> Chart</div>
            <div className="topRight">
              <button><img src={minimize} alt="" width={40} /></button>
              <button onClick={handleMaximize}><img src={maxmize} alt="" width={40}/></button>
              <button onClick={handleClose}><img src={close} alt="" width={40} /></button>  
            </div>
          </div>
          <div className="contentFrame-details">
            <div className="chart"><div className='chart-content'>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="chart-item">
                        <div class="chartTopBar d-flex align-items-center justify-content-between">
                            <div class="topLeft d-flex align-items-center gap-2">
                                <figure class="tmIcon"><img src={icon1} alt="" /></figure>
                            </div>
                            <div className="topRight">
                                <button><img src={minimize} alt="" width={40} /></button>
                                <button><img src={maxmize} alt="" width={40}/></button>
                                <button><img src={close} alt="" width={40} /></button>  
                            </div>
                            
                        </div>
                        <div class="chart-details">
                            <figure class="chartImg"><img src={chart1} alt="" /></figure>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="chart-item">
                        <div class="chartTopBar d-flex align-items-center justify-content-between">
                            <div class="topLeft d-flex align-items-center gap-2">
                                <figure class="tmIcon"><img src={icon1} alt="" /></figure>
                            </div>
                            <div className="topRight">
                                <button><img src={minimize} alt="" width={40} /></button>
                                <button><img src={maxmize} alt="" width={40}/></button>
                                <button><img src={close} alt="" width={40} /></button>  
                            </div>
                            
                        </div>
                        <div class="chart-details">
                            <figure class="chartImg"><img src={chart1} alt="" /></figure>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="chart-item">
                        <div class="chartTopBar d-flex align-items-center justify-content-between">
                            <div class="topLeft d-flex align-items-center gap-2">
                                <figure class="tmIcon"><img src={icon1} alt="" /></figure>
                            </div>
                            <div className="topRight">
                                <button><img src={minimize} alt="" width={40} /></button>
                                <button><img src={maxmize} alt="" width={40}/></button>
                                <button><img src={close} alt="" width={40} /></button>  
                            </div>
                            
                        </div>
                        <div class="chart-details">
                            <figure class="chartImg"><img src={chart1} alt="" /></figure>
                        </div>
                    </div>
                </div>
                </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><img src={tab1} alt="" width={26} /> Dextools</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><img src={tab2} alt="" width={26} /> Birdeye</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><img src={tab3} alt="" width={26} /> Dexscreener</button>
                </li>
                </ul>
               
                    
            </div> </div>
          </div>
        </div>
        
      )}
      
    </>
  );};
export default Chart;
