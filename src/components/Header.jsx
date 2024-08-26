import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="logo-url" alt="Logo" />
        <span>DoIt</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-settings">
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Header;
