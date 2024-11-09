// components/Footer.js
import React from 'react';
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { NavLink } from './NavLink';

const Footer = ({ currentPage, setCurrentPage }) => (
  <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">CodeRx</h3>
          <p className="text-sm">Transforming healthcare through innovative solutions.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <NavLink to="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
            <NavLink to="mission" currentPage={currentPage} setCurrentPage={setCurrentPage}>Mission</NavLink>
            <NavLink to="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About Us</NavLink>
            <NavLink to="contact" currentPage={currentPage} setCurrentPage={setCurrentPage}>Contact</NavLink>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Contact</h3>
          <div className="space-y-2">
            <p className="flex items-center"><Mail className="mr-2" size={16} /> info@coderx.com</p>
            <p className="flex items-center"><Phone className="mr-2" size={16} /> (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; {new Date().getFullYear()} CodeRx. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
