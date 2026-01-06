import React from 'react';
import styles from './AffiliateCTA.module.css';

/**
 * Primary CTA Button Component
 * Links to Private Tutoring Bali affiliate
 */
const AffiliateCTA = ({ 
  text = "Find Your Perfect Tutor in Bali", 
  variant = "primary",
  className = "" 
}) => {
  return (
    <a 
      href="https://privatetutoringbali.com/" 
      className={`${styles.ctaButton} ${styles[variant]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default AffiliateCTA;
