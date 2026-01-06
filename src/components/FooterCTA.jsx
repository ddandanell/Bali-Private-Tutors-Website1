import React from 'react';
import AffiliateCTA from './AffiliateCTA';
import styles from './FooterCTA.module.css';

/**
 * Footer CTA Component
 * Appears at the bottom of landing pages
 */
const FooterCTA = () => {
  return (
    <div className={styles.footerCTA}>
      <p>
        Ready to get started? Private Tutoring Bali offers free consultations 
        to discuss your learning goals.
      </p>
      <AffiliateCTA text="Get Started Today" variant="footer" />
    </div>
  );
};

export default FooterCTA;
