import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './UI.css';

export default function CarouselControls({ onNext, onPrev }) {
  return (
    <div className="carousel-controls">
      <motion.button 
        className="glass-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
      >
        <FiArrowLeft /> <span className="btn-text">Previous</span>
      </motion.button>
      <motion.button 
        className="glass-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
      >
        <span className="btn-text">Next</span> <FiArrowRight />
      </motion.button>
    </div>
  );
}
