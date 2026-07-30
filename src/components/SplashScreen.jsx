import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  // Create 40 tiny mint bubbles for a "fuller" effect
  const bubbles = Array.from({ length: 40 });

  return (
    <div className="splash-container">
      
      {/* 1. THE EMITTER CENTER (All background animations start here) */}
      <div className="animation-hub">
        
        {/* SONAR RINGS - Pulsing behind the logo */}
        <motion.div 
          className="sonar-ring"
          animate={{ scale: [1, 3], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        
        {/* TINY BUBBLES - Flying out from behind the logo */}
        {bubbles.map((_, i) => (
          <motion.div
            key={i}
            className="tiny-bubble"
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{ 
              x: (Math.random() - 0.5) * 500, 
              y: (Math.random() - 0.5) * 500, 
              scale: [0, 1, 0.4],
              opacity: [0, 1, 0] 
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}

        {/* 2. THE LOGO BOX (Sitting ON TOP of the bubbles) */}
        <motion.div 
          className="logo-stack"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onAnimationComplete={() => {
              // Redirect to Home after the initial crisp pop
              setTimeout(onFinish, 2800); 
          }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          {/* Rotating decorative ring around the white box */}
          <svg className="decorative-ring" viewBox="0 0 100 100">
            <motion.circle 
              cx="50" cy="50" r="46" 
              stroke="#a8e0a4" strokeWidth="1.5" fill="none"
              strokeDasharray="15 25"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <div className="white-logo-box">
            <FiMapPin size={45} color="#3a6633" />
          </div>
        </motion.div>
      </div>

      {/* 3. THE BRAND TEXT (Below the animation hub) */}
      <motion.div 
        className="brand-footer"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h1 className="splash-brand-text">
          <span className="mint-text">FLE</span> TRACKER
        </h1>
        <div className="accent-bar" />
      </motion.div>

    </div>
  );
};

export default SplashScreen;