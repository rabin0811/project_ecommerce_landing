import React from 'react';
import { motion } from 'framer-motion';
import './UI.css';

export default function Button({ children }) {
  return (
    <motion.button 
      className="btn-primary"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
