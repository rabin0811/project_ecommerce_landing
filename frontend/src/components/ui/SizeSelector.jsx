import React from 'react';
import { motion } from 'framer-motion';
import './UI.css';

export default function SizeSelector({ sizes, selected, onSelect }) {
  return (
    <div className="size-selector">
      {sizes.map(size => (
        <button 
          key={size}
          className={`size-pill ${selected === size ? 'active' : ''}`}
          onClick={() => onSelect(size)}
        >
          {selected === size && (
            <motion.div 
              layoutId="activeSize" 
              className="size-pill-bg"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="size-text">{size}</span>
        </button>
      ))}
    </div>
  );
}
