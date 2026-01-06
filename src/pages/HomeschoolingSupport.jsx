import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './PlaceholderPage.module.css';
import heroImage from '../assets/hero.png';

const HomeschoolingSupport = () => {
    return (
        <>
            <SEO
                title="Homeschooling Support Bali - Tutoring for Homeschool Families [2026]"
                description="Complete homeschooling support in Bali. Qualified tutors for homeschool families. Curriculum guidance, academic support, and exam preparation."
                keywords="homeschooling Bali, homeschool tutor, homeschool support"
                path="/homeschooling-support-bali"
            />
            <ExitIntentPopup />
            <Hero
                title="Homeschooling Support in Bali: Complete Guide"
                subtitle="Expert tutoring support for homeschooling families"
                image={heroImage}
                ctaText="Get Homeschool Support"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />
            <article className={styles.article}>
                <div className="container">
                    <section className={styles.section}>
                        <h2>Coming Soon: Homeschooling Support Guide</h2>
                        <p>
                            Comprehensive information about homeschooling in Bali, including curriculum options, tutoring support, and legal requirements.
                        </p>
                        <p>
                            <strong>Private Tutoring Bali</strong> provides specialized support for homeschooling families with flexible tutoring options.
                        </p>
                    </section>
                    <ServiceProviderBox pageSpecificTopic="homeschooling success with personalized tutoring support" />
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default HomeschoolingSupport;
