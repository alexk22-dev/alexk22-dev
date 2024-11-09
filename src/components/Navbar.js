// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from './NavLink';

const Navbar = ({ currentPage, setCurrentPage }) => {
  // ... (existing state and useEffect logic)

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-300 bg-gray-800 z-50 ${
        visible || isHovering ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold text-orange-500"
          >
            CodeRx
          </button>
          <div className="space-x-8">
            <NavLink to="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
            <NavLink to="mission" currentPage={currentPage} setCurrentPage={setCurrentPage}>Mission</NavLink>
            <NavLink to="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About Us</NavLink>
            <NavLink to="contact" currentPage={currentPage} setCurrentPage={setCurrentPage}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
