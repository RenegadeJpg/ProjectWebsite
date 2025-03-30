import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiDotsThreeOutlineFill, PiWarehouse } from "react-icons/pi";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-primary-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center relative">
          {/* Menu Dropdown */}
          <div className="relative order-1">
            <button
              className="flex items-center space-x-2 bg-primary-dark text-primary-darker hover:text-primary-white px-4 py-2 rounded-md focus:outline-none"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-label="Toggle navigation menu"
            >
              <PiDotsThreeOutlineFill size={22} />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-40">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-primary-darker hover:bg-primary-lighter"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <PiWarehouse size={15} className="inline-block mr-2" />
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
