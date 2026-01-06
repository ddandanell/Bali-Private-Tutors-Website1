import React from 'react';
import AffiliateCTA from './AffiliateCTA';
import styles from './ServiceProviderBox.module.css';

/**
 * Service Provider Box Component
 * Highlights Private Tutoring Bali as the recommended service provider
 */
const ServiceProviderBox = ({ pageSpecificTopic = "your learning needs" }) => {
  return (
    <div className={styles.serviceProviderBox}>
      <h2>Get Expert Tutoring Support</h2>
      <p>
        <strong>Private Tutoring Bali</strong> offers personalized home-based tutoring 
        for all subjects and levels across the island. Their qualified teachers can help 
        with {pageSpecificTopic}.
      </p>
      
      <h3>What They Offer:</h3>
      <ul className={styles.featureList}>
        <li>✓ Island-wide coverage across Bali</li>
        <li>✓ Qualified, experienced teachers</li>
        <li>✓ Personalized learning plans</li>
        <li>✓ Flexible scheduling (including weekends)</li>
        <li>✓ One-on-one or group learning options</li>
        <li>✓ All subjects and academic levels</li>
      </ul>
      
      <div className={styles.ctaContainer}>
        <AffiliateCTA text="Schedule Your Free Consultation" variant="primary" />
      </div>
    </div>
  );
};

export default ServiceProviderBox;
