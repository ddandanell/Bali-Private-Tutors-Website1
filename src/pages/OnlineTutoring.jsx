import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const OnlineTutoring = () => {
    return (
        <>
            <SEO
                title="Online Tutoring Bali - Flexible Virtual Learning for All Subjects [2026]"
                description="Expert online tutoring in Bali. Flexible virtual lessons for all subjects and curricula. Connect with qualified tutors from anywhere on the island."
                keywords="online tutoring Bali, virtual tutor, online learning Bali"
                path="/online-tutoring-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="Online Tutoring in Bali: Virtual Learning Excellence"
                subtitle="Flexible online tutoring from anywhere in Bali"
                image={heroImage}
                ctaText="Find Your Online Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Complete Online Tutoring Guide</h2>
                        <p>
                            Information about online tutoring options in Bali, technology requirements, and the benefits of virtual learning.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> offers both in-person and online tutoring options for maximum flexibility.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="online tutoring across all subjects with flexible scheduling" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default OnlineTutoring;
