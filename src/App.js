// App.js
import React, { useState } from 'react';
import Home from './pages/Home';
import Mission from './pages/Mission';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTracker from './components/ScrollTracker';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <ScrollTracker />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'mission' && <Mission />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact setCurrentPage={setCurrentPage} />}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
