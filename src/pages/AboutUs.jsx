import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css'; // Reusing Home styles
import heroImage from '../assets/hero_about.png';

const AboutUs = () => {
    return (
        <>
            <SEO
                title="About Bali Private Tutors | Our Mission, Values & Tutor Vetting Process"
                description="Meet the team behind Bali Private Tutors. Learn about our rigorous tutor vetting process, our commitment to educational excellence, and why expat families trust us."
                keywords="About Bali Private Tutors, education consultants Bali, tutor vetting Bali, expat education support"
                path="/about-us"
            />

            <Hero
                title="More Than Just Tutors"
                subtitle="We are a community of educators dedicated to empowering the next generation of global citizens."
                image={heroImage}
                ctaText="Join Our Network"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Ethos: Education Without Borders</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        Bali Private Tutors was founded on a simple yet powerful belief: impeccable education should be accessible anywhere. As digital nomad families and global citizens flock to Bali, they bring with them a desire for a lifestyle that balances tropical freedom with academic rigor.
                    </p>
                    <p>
                        We recognized a gap in the market. Local schools were often overcrowded or culturally specific, while international schools came with exorbitant fees and rigid schedules. We created a third option: a premium, personalized, and professional tutoring service that brings the classroom to your villa. We are not an agency that simply swaps contact details; we are an educational consultancy that proactively manages your child's learning journey.
                    </p>
                </div>
            </section>

            {/* THE VETTING PROCESS */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>The "Top 1%" Vetting Process</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
                        Parents often ask, "How do you select your tutors?" The answer is: rigorously. We receive hundreds of applications, but only a fraction make it onto our roster.
                    </p>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>1. Academic Credentialing</h3>
                            <p>Every tutor must hold at least a Bachelor's degree from an accredited university. Many of our team members hold Master's degrees in Education, PGCEs (Postgraduate Certificate in Education), or specific subject doctorates. We verify all transcripts and certificates directly with the issuing institutions.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>2. Safety & Background Checks</h3>
                            <p>Child safety is our non-negotiable priority. We require up-to-date police clearance certificates from the tutor's home country and from Indonesia (SKCK). We also conduct reference checks with previous employers, specifically asking about safeguarding and professional conduct.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>3. The "Mock Lesson"</h3>
                            <p>A CV doesn't tell you if someone can teach. During our interview process, candidates must deliver a 20-minute mock lesson to our senior education consultant. We assess their ability to explain complex concepts simply, their engagement techniques, and their patience.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>4. Personality & Cultural Fit</h3>
                            <p>Bali attracts a specific type of family—open-minded, adventurous, and often entrepreneurial. Our tutors need to mirror this. We look for adaptability, emotional intelligence, and a genuine love for the island lifestyle. They need to be respectful guests in your private home.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Core Values</h2>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-turquoise)' }}>I</div>
                        <div>
                            <h3>Integrity</h3>
                            <p>We believe in honest communication. If we don't have a tutor who is a perfect match for your specific needs (e.g., specialized Special Needs support that requires clinical certification), we will tell you upfront rather than sending someone underqualified. Trust is our currency.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-lime)' }}>E</div>
                        <div>
                            <h3>Empowerment</h3>
                            <p>Our goal is to make ourselves obsolete. We want to teach your child the study skills, time management strategies, and critical thinking tools they need to eventually learn independently. We empower students to take ownership of their own education.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-midnight)' }}>C</div>
                        <div>
                            <h3>Cultural Bridge-Building</h3>
                            <p>We are guests in Indonesia. We actively encourage our expat students to learn Bahasa Indonesia and respect Balinese customs. We also prioritize hiring highly qualified Indonesian educators for our team, fostering a true cross-cultural exchange.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOUNDER STORY */}
            <section className={styles.featuresSection} style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Meet the Collaborative</h2>
                    <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexDirection: 'column' }}>
                        <p className={styles.introText}>
                            Bali Private Tutors is not run by a faceless algorithm. We are a collective of passionate educators who have lived and taught in Bali for years.
                        </p>
                        <div style={{ textAlign: 'left', maxWidth: '800px', lineHeight: '1.8', color: '#555' }}>
                            <p>
                                The initiative began when a group of senior teachers from international schools in Canggu and Sanur noticed a trend: students were burning out. The rigid structure of the school day, combined with long commutes in traffic, was draining the joy out of learning. At the same time, homeschooling families were struggling to find consistent, high-quality support for higher-level subjects like Calculus and Physics.
                            </p>
                            <p style={{ marginTop: '20px' }}>
                                We decided to pool our resources. We created a standardized system for curriculum delivery that allowed students to get the "best of both worlds"—the flexibility of home learning with the rigorous standards of a top-tier school. Today, we support over 50 families across the island, from short-term holiday visitors to long-term residents preparing for university entrance.
                            </p>
                            <p style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '15px', borderLeft: '4px solid var(--color-turquoise)' }}>
                                <strong>Looking for general private tutoring outside of the IB curriculum?</strong> While we specialize in international curriculum support, we recommend our partners at <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', textDecoration: 'underline' }}>Private Tutoring Bali</a> for comprehensive educational support across all subjects and levels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2>Join Our Community</h2>
                    <p>Whether you are a parent seeking support or a qualified educator looking to join our team, we would love to hear from you.</p>
                    <a href="/contact" className={styles.submitButton} style={{ display: 'inline-block', width: 'auto', marginTop: '20px', textDecoration: 'none' }}>Contact Us</a>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
