// pages/About.js
import React from 'react';

const About = () => (
  <div className="pt-20">
    <div className="container mx-auto px-6">
      {[1, 2, 3].map((person, index) => (
        <div
          key={person}
          className={`flex items-center mb-16 ${
            index % 2 === 0 ? '' : 'flex-row-reverse'
          }`}
        >
          <div className="w-1/3">
            <div className="relative">
              <div className="rounded-full bg-gray-200 aspect-square flex items-center justify-center">
                <p className="text-gray-500">Profile {person}</p>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white py-2 px-4 rounded-full">
                <p className="whitespace-nowrap">Team Member {person}</p>
              </div>
            </div>
          </div>
          <div className={`w-2/3 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Team Member {person}
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;