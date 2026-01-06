import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const MathTutor = () => {
    return (
        <>
            <SEO
                title="Math Tutor Bali - Expert Math Tutoring for All Levels [2026]"
                description="Professional math tutoring in Bali. Expert support for elementary to advanced calculus, IB Math, IGCSE Math, SAT Math prep."
                keywords="math tutor Bali, mathematics tutoring, calculus tutor Bali"
                path="/math-tutor-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="Math Tutor in Bali: Building Mathematical Confidence"
                subtitle="Expert math tutoring for all levels and curricula"
                image={heroImage}
                ctaText="Find Your Math Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Comprehensive Math Tutoring Guide</h2>
                        <p>
                            Detailed information about math tutoring in Bali, covering all levels from elementary to advanced calculus.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> has experienced math tutors specializing in all curricula and levels.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="mathematics success at all levels" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default MathTutor;
