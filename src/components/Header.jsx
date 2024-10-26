import React from 'react';

function Header() {
  return (
    <div>
      <div className="fixed flex font-playfair font-semibold bg-grey-800 p-4 top-0 w-full z-10 items-center justify-center">
        {/* Navigation Links centered in the remaining space */}
        <div className="flex justify-center gap-8 text-white text-lg">
          <a href="#home" className="hover:text-teal-500">Home</a>
          <a href="#about" className="hover:text-teal-500">About</a>
          <a href="#portfolio" className="hover:text-teal-500">Portfolio</a>
          <a href="#footer" className="hover:text-teal-500">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
