import React, { useState, useEffect } from 'react';
import AffiliateCTA from './AffiliateCTA';
import styles from './ExitIntentPopup.module.css';
import { X } from 'lucide-react';

/**
 * Exit Intent Popup Component
 * Triggers when user attempts to leave the page
 */
const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Trigger when mouse leaves viewport at the top
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button 
          className={styles.closeButton} 
          onClick={handleClose}
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        
        <h2>Before You Go!</h2>
        <p>
          Connect with Private Tutoring Bali for a free consultation. 
          Their expert tutors can help with all your educational needs.
        </p>
        
        <div className={styles.ctaContainer}>
          <AffiliateCTA 
            text="Schedule Free Consultation" 
            variant="primary" 
          />
        </div>
        
        <button 
          className={styles.noThanks} 
          onClick={handleClose}
        >
          No thanks, I'll continue browsing
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
