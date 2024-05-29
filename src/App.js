// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Pages/About';
import Howtobuy from './Pages/Howtobuy';
import Home from './Pages/Home';
import Tokenomics from './Pages/Tokenomics';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Chart from './Pages/Chart';
const App = () => {
  return (
    <>
<Router>
      <div className='row align-items-center'>
        <div className='col-md-2'>
           <Header />
        </div>
        <div className='col-md-10'>
        <Routes>
          <Route path="/Howtobuy" element={<Howtobuy />} />
          <Route path="/Tokenomics" element={<Tokenomics />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Chart" element={<Chart />} />
          <Route index element={<Home />} />
          </Routes>
          </div>
      </div>
      <Footer />
      </Router>
    </>
  );
};

export default App;
