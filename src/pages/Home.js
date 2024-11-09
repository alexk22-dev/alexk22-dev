// pages/Home.js
import React from 'react';
import { Button } from '../components/Button';

const Home = ({ setCurrentPage }) => (
  <div className="pt-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Revolutionizing Healthcare Technology
          </h1>
          <p className="text-gray-600 mb-8">
            At CodeRx, we're dedicated to bridging the gap between healthcare providers
            and innovative technology solutions. Our platform empowers medical professionals
            to deliver better care through streamlined processes and advanced analytics.
          </p>
        </div>
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Placeholder for Hero Image</p>
        </div>
      </div>

      <div className="text-center mb-16">
        <Button onClick={() => setCurrentPage('contact')}>Join the Pre-Launch Waitlist</Button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to revolutionize healthcare delivery through innovative
            technology solutions that empower providers and improve patient outcomes.
          </p>
          <button 
            onClick={() => setCurrentPage('mission')}
            className="text-orange-500 hover:text-orange-600"
          >
            Learn More →
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            We're a team of healthcare professionals and technologists working
            together to create meaningful change in healthcare delivery.
          </p>
          <button 
            onClick={() => setCurrentPage('about')}
            className="text-orange-500 hover:text-orange-600"
          >
            Meet Our Team →
          </button>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Ready to transform your healthcare practice? Get in touch with our team
            to learn how we can help.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="text-orange-500 hover:text-orange-600"
          >
            Get in Touch →
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
