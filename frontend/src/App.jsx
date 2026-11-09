import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from './data/products';
import Navbar from './components/layout/Navbar';
import HeroLeft from './components/sections/HeroLeft';
import HeroCenter from './components/sections/HeroCenter';
import HeroRight from './components/sections/HeroRight';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextProduct = products[activeIndex === products.length - 1 ? 0 : activeIndex + 1];

  // Theme logic: index 1 (white) and index 3 (cream) should have dark text.
  const isLightBackground = activeIndex === 1 || activeIndex === 3;
  const colorTheme = isLightBackground ? 'light' : 'dark';

  return (
    <div 
      className="app-container" 
      style={{ 
        background: activeProduct.background, 
        color: isLightBackground ? '#333' : '#fff' 
      }}
    >
      <Navbar />
      
      <main className="hero-layout">
        <HeroLeft colorTheme={colorTheme} />
        
        <HeroCenter 
          product={activeProduct} 
          onNext={handleNext} 
          onPrev={handlePrev} 
        />
        
        <HeroRight 
          product={activeProduct} 
          nextProduct={nextProduct}
          colorTheme={colorTheme} 
        />
      </main>

      <motion.div 
        className="bottom-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>Dress Better. Feel Better.</p>
      </motion.div>
    </div>
  );
}

export default App;
