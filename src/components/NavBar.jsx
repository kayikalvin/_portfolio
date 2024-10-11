import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNav(false); // Close mobile menu on link click
  };

  return (
    <div
      className={`flex justify-between items-center w-full h-30 px-4 py-4 text-white fixed transition-all duration-500 ${
        isScrolled ? 'bg-transparent' : 'bg-black'
      }`}
    >
      <h1 className='text-6xl font-signature ml-2'>Kalvoh</h1>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`text-xl px-4 cursor-pointer capitalize font-semibold ${
              activeLink === link ? 'text-cyan-500' : 'text-gray-400'
            } hover:scale-105 duration-200`}
          >
            <Link
              to={link}
              smooth
              duration={400}
              offset={-70}
              className="cursor-pointer"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
                activeLink === link ? 'text-cyan-500' : 'text-gray-400'
              }`}
            >
              <Link
                to={link}
                smooth
                duration={400}
                offset={-70}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
