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


const Howtobuy = () => {
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
                    <h2>How To Buy</h2>
                    <p>Getting your hands on $Rose is easy! Simply use Phantom or Bonkbot, or if you consider yourself a professional shitcoin trader, opt for Photon.</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <a href="https://jup.ag/" target="_blank" class="single-item">
                                <figure className='icon'><img src={wallet} /></figure>
                                 <h3>Connect your wallet</h3>
                                <p>You need to go to DumRose official presale on Pinksale and connect your wallet. Make sure you're on the BASE network.</p>
                            </a>
                        </div>
                        <div className='col-md-4'>
                            <a href="https://jup.ag/" target="_blank" class="single-item">
                            <figure className='icon'><img src={amount} /></figure>
                                <h3>Enter Amount</h3>
                                <p>Once Your Wallet Is Connected, Use ETH To Enter The Amount Of DumRose To Buy. Remember To Have ETH For The Fees.</p>
                            </a>
                        </div>
                        <div className='col-md-4'>
                            <a href="https://jup.ag/" target="_blank" class="single-item">
                            <figure className='icon'><img src={ready} /></figure>
                                 <h3>Ready!</h3>
                                <p>Once the purchase is complete, you'll need to wait for the presale to end to receive your tokens!</p>
                            </a>
                        </div>
                    </div>
                    <div class="row"><div class="col-12"><div class="copytoclipboard-inner"><div class="copytoclipboard"><p>RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a</p><button><span><img src={copy} alt="" /></span></button></div></div></div></div>
            </div>
          </div>
        </div>
        
      )}
      
    </>
  );};
export default Howtobuy;
