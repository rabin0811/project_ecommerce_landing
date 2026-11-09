import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselControls from '../ui/CarouselControls';
import './HeroSections.css';

export default function HeroCenter({ product, onNext, onPrev }) {
  return (
    <div className="hero-section hero-center">
      <div className="product-display">
        <AnimatePresence mode="wait">
          <motion.img 
            key={product.id}
            src={product.image} 
            alt={product.name}
            className="product-image"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -10, 0] }}
            exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
            transition={{ 
              duration: 0.6,
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          />
        </AnimatePresence>
      </div>
      <div className="carousel-controls-wrapper">
        <CarouselControls onNext={onNext} onPrev={onPrev} />
      </div>
    </div>
  );
}
