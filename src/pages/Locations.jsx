import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css'; // Reusing Home styles
import heroImage from '../assets/hero_locations.png';

const Locations = () => {
    return (
        <>
            <SEO
                title="Private Tutors in Bali Locations | Seminyak, Canggu, Ubud, Sanur & Uluwatu"
                description="Find the best private tutors near you in Bali. We serve families in Seminyak, Canggu, Ubud, Sanur, Uluwatu, and Jimbaran. Villa-based tuition and homeschooling support."
                keywords="Tutor Seminyak, Tutor Canggu, Tutor Ubud, Tutor Sanur, Tutor Uluwatu, Bali private tuition locations"
                path="/locations"
            />

            <Hero
                title="We Come to Your Villa"
                subtitle="Island-wide coverage. From the rice terraces of Ubud to the surf breaks of Uluwatu."
                image={heroImage}
                ctaText="Find a Tutor Near Me"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Island-Wide Educational Support</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        Bali is an island of diverse neighborhoods, each with its own unique character and logistical challenges. Traffic can be unpredictable, and finding reliable services that come to your doorstep is a luxury. At Bali Private Tutors, we have built a decentralized network of educators stationed across the island's most popular expat hubs. For professional <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>private tutoring services in Bali</a>, we bring education directly to your villa.
                    </p>
                    <p>
                        Whether you are staying in a beachfront villa in Sanur, a digital nomad guesthouse in Canggu, or a jungle retreat in Ubud, we ensure that a qualified tutor is never far away. This localization minimizes travel fees and ensures that your tutor understands the specific vibe and resources of your neighborhood.
                    </p>
                </div>
            </section>

            {/* REGION 1: SEMINYAK & LEGIAN */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Seminyak & Legian</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>The Lifestyle</h3>
                            <p>Known for its chic boutiques, world-class dining, and luxury pool villas, Seminyak is a favorite for short-term holidaymakers and families who want to be in the heart of the action. It offers a sophisticated environment but can be busy.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Tutoring Logistics</h3>
                            <p>Our tutors in Seminyak are experts at navigating the "gangs" (small alleyways) on scooters to reach your private villa. For families staying in hotels like the W or Alila, we can arrange sessions in quiet business centers or lobby lounges.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Popular Subjects</h3>
                            <p>We see a high demand here for "Holiday Boost" packages—intensive English or Math catch-up sessions for children on vacation. Language lessons (Indonesian or French) are also popular for adults lounging by the pool. Discover <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>private tutoring in Seminyak</a> tailored to your family's needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REGION 2: CANGGU & PERERENAN */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Canggu, Berawa & Pererenan</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px' }}>The epicenter of the digital nomad boom.</p>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-midnight)' }}>C</div>
                        <div>
                            <h3>The Community</h3>
                            <p>Canggu has the highest concentration of expat families and "worldschoolers." The vibe is creative, entrepreneurial, and health-conscious. It is home to major international schools like the Montessori School Bali and Canggu Community School.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-turquoise)' }}>S</div>
                        <div>
                            <h3>After-School Support</h3>
                            <p>Because traffic in Canggu (the infamous "shortcut") can be gridlocked, parents love our home-visit service. We specialize in after-school homework help for students attending local international schools, particularly in IB MYP and IGCSE subjects.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-lime)' }}>H</div>
                        <div>
                            <h3>Homeschooling Hubs</h3>
                            <p>Canggu is full of coworking spaces and family clubs (like Parklife). We often facilitate small group tutoring pods here, where 3-4 homeschooled children meet to study Science or History together in a social setting. Find expert <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>tutors in Canggu</a> for your educational needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REGION 3: UBUD */}
            <section className={styles.featuresSection} style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Ubud & Gianyar</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>Nature & Culture</h3>
                            <p>Ubud attracts families seeking a deeper connection to Balinese culture and nature. It is the home of the famous Green School. The pace is slower, greener, and more spiritual.</p>
                        </div>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>Green School Support</h3>
                            <p>We provide specific academic tutoring to supplement the holistic curriculum of the Green School. While the school excels in environmental leadership, some parents hire our tutors to ensure their children remain competitive in traditional math and sciences (SAT/ACT prep) for university applications.</p>
                        </div>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>Creative Learning</h3>
                            <p>Our Ubud tutors are often artists and environmentalists themselves. Lessons here might take place in a bamboo shala or overlooking a ravine, integrating art and biology into the curriculum. Experience unique <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>private tutoring in Ubud</a> that blends education with nature.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REGION 4: SANUR */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Sanur</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px' }}>The classic, family-friendly choice.</p>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-lime)' }}>1</div>
                        <div>
                            <h3>Calm & Community</h3>
                            <p>Sanur is known for its calm beaches, paved boardwalk, and established expat community. It is home to the Bali Island School (formerly BIS), the island's oldest IB World School.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-midnight)' }}>2</div>
                        <div>
                            <h3>IB Diploma Focus</h3>
                            <p>Because of the proximity to BIS, we have a strong team of IB Diploma specialists based in Sanur. They understand the high pressure of the DP years and offer intensive support for final exams and Internal Assessments. Connect with experienced <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>IB tutors in Sanur</a> for comprehensive support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REGION 5: ULUWATU & THE BUKIT */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Uluwatu, Jimbaran & Nusa Dua</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>South Bali Living</h3>
                            <p>The Bukit Peninsula offers dramatic cliffs and world-class surfing. While it feels more remote, the community is growing rapidly with new schools opening. Jimbaran is also home to the Asian Intercultural School.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Surfing & Studying</h3>
                            <p>Many families here balance high-performance surfing with education. Our tutors are flexible, offering sessions around tide times! We provide structured academic rigor to ensure that young athletes don't fall behind in their core education.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Luxury Resort Tutoring</h3>
                            <p>Nusa Dua is the hub of 5-star resorts (St. Regis, Mulia, Ritz-Carlton). We regularly partner with these hotels to provide premium educational childcare services for VIP guests.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2>We Cover Your Area</h2>
                    <p>Not sure if we serve your specific village? Drop us a message.</p>
                    <a href="/contact" className={styles.submitButton} style={{ display: 'inline-block', width: 'auto', marginTop: '20px', textDecoration: 'none' }}>Check Availability Near Me</a>
                </div>
            </section>
        </>
    );
};

export default Locations;
