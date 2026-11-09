import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SizeSelector from '../ui/SizeSelector';
import './HeroSections.css';

export default function HeroRight({ product, nextProduct, colorTheme }) {
  const [selectedSize, setSelectedSize] = useState('XL');

  return (
    <div className={`hero-section hero-right ${colorTheme}`}>
      <motion.div 
        className="price-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="price">#{product.price.toLocaleString()}</span>
            <span className="old-price">#{product.oldPrice.toLocaleString()}</span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="size-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <SizeSelector 
          sizes={['XL', '2XL', '3XL', '4XL']} 
          selected={selectedSize} 
          onSelect={setSelectedSize} 
        />
      </motion.div>

      <motion.div 
        className="preview-card glass"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="preview-label">Next Product</p>
        <div className="preview-content">
          <AnimatePresence mode="wait">
            <motion.img 
              key={nextProduct.id}
              src={nextProduct.image} 
              alt={nextProduct.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          <div className="preview-details">
            <span className="preview-name">{nextProduct.name}</span>
            <span className="preview-price">#{nextProduct.price.toLocaleString()}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
