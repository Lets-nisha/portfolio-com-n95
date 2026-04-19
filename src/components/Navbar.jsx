import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from 'react'
import "../App.css"

const Navbar = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const name = '</>' ;
 
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/project" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    


  ];

  return (
    <nav className="  shadow-md sticky top-0 z-50 bgColor">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white ">
          {name} Nisha
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-15 ">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? "text-blue-500 font-semibold"
                  : "text-white"
              }  `
            }
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen )}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bgColor text-white  shadow-md ">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 border-b text-white hover:bg-gray-100 nav"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;