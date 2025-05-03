import React from 'react';
import Bridegroom from './Bridegroom.png';

const GroupedImages = () => {
  return (
    <div className="relative w-full flex justify-center mt-10">
      {/* Left Image - Tilted Left */}
      <img
        src={Bridegroom}
        alt="Left"
        className="w-40 h-60 object-cover rounded-lg shadow-lg transform -rotate-6 absolute left-1/2 -translate-x-[130%] z-10"
      />

      {/* Center Image - Straight */}
      <img
        src={Bridegroom}
        alt="Center"
        className="w-44 h-64 object-cover relative z-20 rounded-2xl shadow-xl border-4 border-yellow-400 transition-transform duration-500 hover:scale-105"
      />

      {/* Right Image - Tilted Right */}
      <img
        src={Bridegroom}
        alt="Right"
        className="w-40 h-60 object-cover rounded-lg shadow-lg transform rotate-6 absolute left-1/2 translate-x-[30%] z-10"
      />
    </div>
  );
};

export default GroupedImages;
