import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const PrivateTutoringServices = () => {
    return (
        <>
            <SEO
                title="Private Tutoring Services Bali - Home-Based Learning Support [2026]"
                description="Complete guide to private tutoring services in Bali. Find qualified home tutors for all subjects, ages, and curricula."
                keywords="private tutoring Bali, home tutor, private teacher Bali"
                path="/private-tutoring-services-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="Private Tutoring Services in Bali: Complete Guide"
                subtitle="Everything you need to know about private tutoring in Bali"
                image={heroImage}
                ctaText="Find a Private Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Private Tutoring Services Guide</h2>
                        <p>
                            Comprehensive guide to private tutoring services in Bali, including how to find tutors, what to expect, and pricing information.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> is Bali's premier home-based tutoring service, offering qualified teachers island-wide.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="personalized private tutoring at your location" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default PrivateTutoringServices;
