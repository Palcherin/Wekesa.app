import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const listItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-[20px] left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-black/60 backdrop-blur-md text-white shadow-lg rounded-full px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
          MyLogo
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg">
          {listItems.map((item) => (
            <li key={item.path} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors ${
                    isActive ? "text-blue-400" : "hover:text-blue-400"
                  }`
                }
              >
                {item.label}
                <span className="absolute left-0 -bottom-[5px] w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-300 group-hover:w-full rounded-xl" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <NavLink
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-green-400 px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-green-500"
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 bg-black/70 backdrop-blur-md rounded-2xl px-6 py-4 transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg">
          {listItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>

        <div className="mt-4 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-white text-black focus:outline-none"
          />
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-blue-500 to-green-400 py-2 rounded-full font-semibold text-center text-white hover:from-blue-600 hover:to-green-500"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
