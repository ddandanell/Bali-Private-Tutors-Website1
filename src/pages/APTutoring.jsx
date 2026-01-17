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
                            This page will cover all Advanced Placement subjects, exam strategies, and tutoring options in Bali. AP courses offer college-level curriculum and the opportunity to earn college credit while still in high school, making them valuable for competitive college applications and reducing future tuition costs.
                        </p>
                        <p>
                            <strong><a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', textDecoration: 'underline' }}>Private Tutoring Bali</a></strong> provides expert AP tutoring across all subjects with qualified teachers who can help students achieve scores of 4 or 5 on their AP examinations.
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
