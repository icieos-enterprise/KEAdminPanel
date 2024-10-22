import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-[#6D6D6D] h-[43px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base">
      <div className="flex-1 mb-2 sm:mb-0 text-center sm:text-left">
        Copyright © 2020. Kumzits Everywhere. All rights reserved.
      </div>
      <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
        <a href="/terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
        <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
        <a href="/report" className="hover:text-white transition-colors duration-300">Report an Issue</a>
      </div>
    </footer>
  );
};

export default Footer;
