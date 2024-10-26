// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { auth } from '../firebase';
import Logout from './Logout';
import { onAuthStateChanged } from 'firebase/auth';

function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background shadow fixed top-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          <Link to="/">DigiContract</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`flex-1 md:flex md:items-center md:justify-end ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ScrollLink
            to="features"
            smooth={true}
            offset={-70}
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-text hover:text-primary cursor-pointer"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="pricing"
            smooth={true}
            offset={-70}
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-text hover:text-primary cursor-pointer"
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            to="reviews"
            smooth={true}
            offset={-70}
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-text hover:text-primary cursor-pointer"
          >
            Reviews
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth={true}
            offset={-70}
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-text hover:text-primary cursor-pointer"
          >
            FAQ
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-70}
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-text hover:text-primary cursor-pointer"
          >
            Contact
          </ScrollLink>
          {user ? (
            <Logout />
          ) : (
            <button
              onClick={() => (window.location.href = '/login')}
              className="block mt-4 md:inline-block md:mt-0 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

