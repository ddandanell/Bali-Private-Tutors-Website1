import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const APTutoring = () => {
    return (
        <>
            <SEO
                title="AP Tutoring Bali - Expert Advanced Placement Test Prep [2026]"
                description="Complete AP tutoring in Bali. Expert support for AP Calculus, AP Biology, AP Chemistry, AP English, and all AP subjects."
                keywords="AP tutoring Bali, Advanced Placement tutor, AP exam prep Bali"
                path="/ap-tutoring-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="AP Tutoring in Bali: Advanced Placement Success"
                subtitle="Expert support for all AP subjects and examinations"
                image={heroImage}
                ctaText="Find Your AP Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Comprehensive AP Tutoring Guide</h2>
                        <p>
                            This page will cover all Advanced Placement subjects, exam strategies, and tutoring options in Bali.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> provides expert AP tutoring across all subjects with qualified teachers.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="Advanced Placement success in all AP subjects" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default APTutoring;
