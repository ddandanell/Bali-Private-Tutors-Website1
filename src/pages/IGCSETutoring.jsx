import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const IGCSETutoring = () => {
    return (
        <>
            <SEO
                title="IGCSE Tutoring Bali - Cambridge IGCSE Expert Support [2026]"
                description="Comprehensive IGCSE tutoring in Bali. Expert Cambridge IGCSE support for all subjects. Achieve top grades with qualified tutors."
                keywords="IGCSE tutoring Bali, Cambridge IGCSE tutor, IGCSE exam prep"
                path="/igcse-tutoring-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="IGCSE Tutoring in Bali: Cambridge Excellence"
                subtitle="Expert Cambridge IGCSE support for all subjects"
                image={heroImage}
                ctaText="Find Your IGCSE Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Complete IGCSE Guide</h2>
                        <p>
                            Detailed information about IGCSE tutoring in Bali, covering all Cambridge IGCSE subjects and exam preparation.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> offers comprehensive IGCSE tutoring with experienced Cambridge-qualified teachers.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="Cambridge IGCSE success across all subjects" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default IGCSETutoring;
