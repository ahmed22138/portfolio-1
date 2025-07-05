'use client';
import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: 'http://localhost:3000/' },
    // { name: 'Team', href: '#' },
    // { name: 'Feature', href: '#' },
    { name: 'Skill', href: 'skill' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className=" bg-gradient-to-b from-black to-transparent   flex shadow-md py-4 px-4 sm:px-10  min-h-[70px] tracking-wide relative z-50  ">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* LOGO */}
        <a href="#" className="max-sm:hidden">
          <img
            src="./images/images.png"
            alt="logo"
            className="w-20 rounded-b-full max-sm:w-16 max-lg:w-20 max-md:w-20 max-sm:ml-2 max-sm:mt-1 max-lg:mt-0 max-md:mt-0"
          />
        </a>
        <a href="#" className="hidden max-sm:block">
          <img
            src="./images/images.png"
            alt="logo"
            className="w-20 rounded-b-full max-sm:w-16 max-lg:w-20 max-md:w-20 max-sm:ml-2 max-sm:mt-1 max-lg:mt-0 max-md:mt-0"
          />
        </a>

        {/* LINKS (DESKTOP) */}
        <ul className="hidden lg:flex gap-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-700 text-white font-medium text-[15px]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="flex max-lg:ml-auto space-x-4">
          <button className="px-4 py-2 text-sm rounded-full font-medium text-slate-900 border border-gray-400 bg-gray-50">
            Login
          </button>
          <button className="px-4 py-2 text-sm rounded-full font-medium text-white border border-blue-600 bg-blue-600 hover:bg-blue-700">
            Sign up
          </button>
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-40">
          <div className="bg-white rounded-2xl p-6 w-64 flex flex-col space-y-4 items-center relative">
            <button
              className="absolute top-4 right-4 rounded-full bg-gray-100 p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-4 h-4" />
            </button>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

