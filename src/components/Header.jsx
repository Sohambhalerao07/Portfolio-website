import React from 'react';

function Header() {
  return (
    <div>
      <div className="fixed flex font-playfair font-semibold bg-grey-800 p-4 top-0 w-full z-10 flex-col md:flex-row items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center justify-center md:justify-start">
          <a href='#home' className="text-bold text-white text-2xl md:text-3xl">LOGO</a>
        </div>

        {/* Navigation Links centered in the remaining space */}
        <div className="flex justify-center gap-6 mt-4 md:mt-0 text-white">
          <a href="#home" className='hover:text-blue-400'>Home</a>
          <a href="#about" className='hover:text-blue-400'>About</a>
          <a href="#portfolio" className='hover:text-blue-400'>Portfolio</a>
          <a href="#footer" className='hover:text-blue-400'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
