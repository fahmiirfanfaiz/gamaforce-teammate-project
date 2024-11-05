// components/Navbar.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Image src="/path-to-your-logo.png" alt="Gamaforce Logo" width={150} height={50} />
      </div>

      {/* Middle space (flex-grow) */}
      <div className="navbar-space"></div>

      {/* Buttons */}
      <div className="navbar-buttons">
        <button className="manual-button">Plan Mission Manually</button>
        <button className="plan-button">Plan Mission</button>
      </div>
    </nav>
  );
};

export default Navbar;
