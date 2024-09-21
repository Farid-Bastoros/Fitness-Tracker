import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2>Fitness Tracker</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
