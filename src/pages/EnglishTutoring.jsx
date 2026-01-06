import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const EnglishTutoring = () => {
    return (
        <>
            <SEO
                title="English Tutoring Bali - Expert English Language & Literature Support [2026]"
                description="Professional English tutoring in Bali. Support for English literature, creative writing, EAL/ESL, academic writing, and exam prep."
                keywords="English tutoring Bali, English tutor, literature support Bali"
                path="/english-tutoring-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="English Tutoring in Bali: Language & Literature Excellence"
                subtitle="Expert English support for all levels and needs"
                image={heroImage}
                ctaText="Find Your English Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Complete English Tutoring Guide</h2>
                        <p>
                            Comprehensive information about English tutoring in Bali, covering literature, writing, and language support.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> offers expert English tutoring with native and near-native speakers.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="English language and literature excellence" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default EnglishTutoring;
