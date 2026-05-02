import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from 'react';
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const name = '</>';

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/project" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="shadow-lg sticky top-0 z-50 bgColor backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wider hover:text-blue-400 transition-colors">
          <span className="text-blue-500">{name}</span> Nisha
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm uppercase tracking-widest transition-all duration-300 hover:text-blue-400 ${
                location.pathname === link.path
                  ? "text-blue-500 font-bold"
                  : "text-gray-300"
              }`}
            >
              {link.name}
              {/* Active Underline Animation */}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Professional Animated Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu with Slide-down Effect */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bgColor px-6 pb-6 pt-2 space-y-2 border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                location.pathname === link.path
                  ? "bg-blue-600/20 text-blue-400 font-semibold"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;