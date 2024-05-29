import React, { useState } from 'react';
import img6 from '../img/faq.png';

import minimize from '../img/minimize.png';
import maxmize from '../img/maxmize.png';
import close from '../img/close.png';




const Faq = () => {
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
            <div className='title'><img src={img6} alt="Home" /> Faq</div>
            <div className="topRight">
              <button><img src={minimize} alt="" width={40} /></button>
              <button onClick={handleMaximize}><img src={maxmize} alt="" width={40}/></button>
              <button onClick={handleClose}><img src={close} alt="" width={40} /></button>  
            </div>
          </div>
          <div className="contentFrame-details">
            <div className="faq">
                <div className="section-title text-center">
                    <h2>Faq</h2>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Why DumRose?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Did you ever thought to yourself "wtf is Rose doing?" United by desperation we have decided to form a rebellion against demonic Rose. Let the rage and the memes free.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why was I temporarily banned?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Rose did not agree with you opinion, try again in 10 minutes.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is the long term goal?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            To help the actual Rose team develop a less annoying bot, with community feedback through eye-opening memes.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Why was I muted?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Did you just criticize Rose? You are on thin ice buddy
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
        
      )}
      
    </>
  );};
export default Faq;
