import React from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="nav-left">
        <span className="logo-icon">H</span>
        <span className="logo-text">HALLY</span>
      </div>
      <ul className="nav-center">
        <li><a href="#">Home</a></li>
        <li className="active"><a href="#">Tshirt</a></li>
        <li><a href="#">Hoodies</a></li>
        <li><a href="#">Sweatshirts</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <div className="nav-right">
        <button className="icon-btn"><FiUser /></button>
        <button className="icon-btn"><FiShoppingCart /></button>
      </div>
    </nav>
  );
}
