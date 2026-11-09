import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Button from '../ui/Button';
import './HeroSections.css';

export default function HeroLeft({ colorTheme }) {
  return (
    <div className={`hero-section hero-left ${colorTheme}`}>
      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-heading">
          Wear Confidence.<br/>Define Your Style.
        </h1>
        <p className="hero-description">
          Discover premium T-shirts, hoodies, and sweatshirts designed for comfort, quality, and everyday expression.
        </p>
        
        <Button>Get the look &rarr;</Button>
      </motion.div>

      <motion.div 
        className="social-icons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaTiktok /></a>
      </motion.div>
    </div>
  );
}
