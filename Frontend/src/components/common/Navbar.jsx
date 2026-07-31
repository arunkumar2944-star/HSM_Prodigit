import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-amber-500"
        : "text-gray-700 hover:text-amber-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-amber-500"
          >
            🏨
            <span>HotelMS</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" end className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-amber-500 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/hotels" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Hotels
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-amber-500 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/aboutus" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-amber-500 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/contactus" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-amber-500 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">

            <Link
              to="/login"
              className="px-5 py-2 border border-amber-500 text-amber-500 rounded-lg font-medium hover:bg-amber-500 hover:text-white transition duration-300"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 shadow-md transition duration-300"
            >
              Sign Up
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-5">

            <div className="flex flex-col space-y-4">

              <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/hotels" onClick={() => setIsOpen(false)} className={navLinkClass}>
                Hotels
              </NavLink>

              <NavLink to="/aboutus" onClick={() => setIsOpen(false)} className={navLinkClass}>
                About
              </NavLink>

              <NavLink to="/contactus" onClick={() => setIsOpen(false)} className={navLinkClass}>
                Contact
              </NavLink>

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="border border-amber-500 text-amber-500 rounded-lg py-2 text-center font-medium hover:bg-amber-500 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="bg-amber-500 text-white rounded-lg py-2 text-center font-medium hover:bg-amber-600 transition"
              >
                Sign Up
              </Link>

            </div>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;