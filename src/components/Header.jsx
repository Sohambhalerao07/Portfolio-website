import React from 'react';

function Header() {
  return (
    <div>
      <div className="fixed flex font-playfair font-semibold bg-grey-800 overflow-auto p-4 top-0 w-full z-10">
        {/* Logo on the left */}
        <div className="flex items-center">
          <a href='' className="text-bold text-white">LOGO</a>
        </div>
        
        {/* Spacer to center the navigation links */}
        <div className="flex-grow"></div>

        {/* Navigation Links centered in the remaining space */}
        <div className="flex justify-center gap-8 text-white px-5">
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
