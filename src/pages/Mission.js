// pages/Mission.js
import React from 'react';

const Mission = () => (
  <div className="pt-20">
    <div className="container mx-auto px-6">
      <div className="relative">
        <div className="grid grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={item}
              className={`bg-gray-50 p-6 rounded-lg transform ${
                index % 2 === 0 ? 'translate-y-8' : ''
              }`}
            >
              <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-500">Graphic {item}</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Milestone {item}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>

        <svg
          className="absolute top-0 left-0 w-full h-full -z-10"
          style={{ minHeight: '600px' }}
        >
          <path
            d="M 100 100 C 200 100, 300 200, 400 200 C 500 200, 600 300, 700 300"
            stroke="rgb(249, 115, 22)"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Mission;
