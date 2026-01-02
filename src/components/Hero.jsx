import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ title, subtitle, image, ctaText, ctaLink }) => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${image})` }}>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                {ctaText && ctaLink && (
                    <a href={ctaLink} className={styles.ctaButton}>{ctaText}</a>
                )}
            </div>
        </section>
    );
};

export default Hero;
