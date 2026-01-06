import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const SATPrep = () => {
    return (
        <>
            <SEO
                title="SAT Prep Bali - Expert SAT Tutoring & Test Preparation [2026]"
                description="Comprehensive SAT preparation in Bali. Expert tutors for SAT Math, Reading, Writing. Proven strategies to achieve your target score."
                keywords="SAT prep Bali, SAT tutor Bali, SAT test preparation"
                path="/sat-prep-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="SAT Prep in Bali: Expert Test Preparation"
                subtitle="Achieve your target SAT score with professional tutoring support"
                image={heroImage}
                ctaText="Find Your SAT Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Complete SAT Preparation Guide</h2>
                        <p>
                            This page will provide comprehensive information about SAT preparation in Bali, including test strategies, study schedules, and expert tutoring options.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> offers specialized SAT preparation with experienced tutors who understand the test inside and out.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="SAT preparation including Math, Evidence-Based Reading, and Writing sections" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default SATPrep;
