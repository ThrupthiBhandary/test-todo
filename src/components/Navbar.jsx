import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul className="profile-dropdown">
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;