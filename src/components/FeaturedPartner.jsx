import React from 'react';
import AffiliateCTA from './AffiliateCTA';
import styles from './FeaturedPartner.module.css';
import { CheckCircle } from 'lucide-react';

/**
 * Featured Partner Component
 * Showcases Private Tutoring Bali as the recommended partner
 */
const FeaturedPartner = () => {
  const features = [
    'All subjects and academic levels',
    'IB, Cambridge, American & Australian curricula',
    'Island-wide coverage across Bali',
    'Qualified, experienced teachers',
    'Flexible scheduling'
  ];

  return (
    <section className={styles.featuredPartnerSection}>
      <div className="container">
        <div className={styles.partnerBox}>
          <div className={styles.badge}>Recommended Partner</div>
          
          <h2>Expert Tutoring Services in Bali</h2>
          <h3>Private Tutoring Bali</h3>
          
          <p className={styles.description}>
            Bali's premier home-based tutoring service with qualified teachers island-wide
          </p>
          
          <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <li key={index}>
                <CheckCircle size={20} className={styles.checkIcon} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className={styles.ctaContainer}>
            <AffiliateCTA text="Learn More" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPartner;
