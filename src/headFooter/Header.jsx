import React, { useState } from 'react';
import { Moon, Sun, Menu, X, User } from 'lucide-react'; // Using lucide-react for the icons

const Header = () => {
  // State for light/dark mode (initial state is 'light')
  const [darkMode, setDarkMode] = useState(false);

  // State for mobile menu (initial state is 'closed')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle light/dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You would typically apply a 'dark' class to the <html> tag here
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // The main navigation bar container
    // Uses flexbox to align items, fixed position, and padding
    <nav className={`fixed top-0 left-0 w-full z-10 p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">

        {/* --- 1. Logo/Brand on the left --- */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-lime-400 tracking-wider">
            SmartDesk
          </span>
          <span className="text-sm text-green-500">
            &diams;
          </span>
        </div>

        {/* --- 2. Icons on the right (Desktop & Mobile) --- */}
        <div className="flex items-center space-x-4">
          
          {/* Light/Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          {/* Profile/User Icon (for the small circles/lines) */}
          <User className="h-5 w-5 cursor-pointer hover:text-green-500 transition duration-300 hidden sm:block" />

          {/* Mobile Menu Button (Hamburger/Close Icon) */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 sm:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* --- 3. Mobile Navigation Menu (hidden by default) --- */}
      {/* This menu appears below the main bar on small screens when 'isMenuOpen' is true */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col space-y-2 border-t pt-4">
          <a href="#" className="py-2 hover:text-green-500 transition duration-300">Home</a>
          <a href="#" className="py-2 hover:text-green-500 transition duration-300">About</a>
          <a href="#" className="py-2 hover:text-green-500 transition duration-300">Services</a>
          <a href="#" className="py-2 hover:text-green-500 transition duration-300">Contact</a>
          {/* User Icon for mobile view */}
          <a href="#" className="flex items-center py-2 hover:text-green-500 transition duration-300">
             <User className="h-5 w-5 mr-2" /> Profile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;