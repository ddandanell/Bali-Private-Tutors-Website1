import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const InternationalSchoolTutoring = () => {
    return (
        <>
            <SEO
                title="International School Tutoring Bali - IB, Cambridge, American Curriculum [2026]"
                description="Expert tutoring for international school students in Bali. Support for IB, Cambridge IGCSE, American, Australian, and all international curricula."
                keywords="international school tutoring Bali, international curriculum tutor, expat education Bali"
                path="/international-school-tutoring-bali"
            />

            <ExitIntentPopup />

            <Hero
                title="International School Tutoring in Bali"
                subtitle="Expert support for all international curricula and academic levels"
                image={heroImage}
                ctaText="Find Your Perfect Tutor"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />

            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Comprehensive International School Tutoring Guide</h2>
                        <p>
                            This page will provide detailed information about international school tutoring options in Bali, including support for IB, Cambridge IGCSE, American, Australian, and other international curricula.
                        </p>
                        <p>
                            In the meantime, <strong>Private Tutoring Bali</strong> offers comprehensive support for international school students across all curricula. Their experienced tutors can help with any subject, any level, anywhere in Bali.
                        </p>
                    </section>

                    <ServiceProviderBox pageSpecificTopic="international school success across all curricula including IB, Cambridge, American, and Australian systems" />

                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default InternationalSchoolTutoring;
