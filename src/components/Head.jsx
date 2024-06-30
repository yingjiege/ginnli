import React, { useState } from 'react';
import './Header.css'; // Example CSS for styling
import ginnli from '../photo/head/ginnli.webp'; // Assuming ginnli.webp is located in '../photo/head/'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={ginnli} alt="Logo" />
      </div>
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Account & Cart
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">My Account</a>
            <a href="#">My Cart</a>
            {/* Add more options as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
