import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css'; // Reusing Home styles for consistency
import heroImage from '../assets/hero_subjects.png';

const SubjectTutoring = () => {
    return (
        <>
            <SEO
                title="Subject Tutoring in Bali | Math, Science, English & Languages - Bali Private Tutors"
                description="Expert private tutoring in Bali for Mathematics, Sciences (Physics, Chemistry, Biology), English Literature, and Foreign Languages. Tailored support for IB, IGCSE, and A-Level students."
                keywords="Math tutor Bali, Science tutor Bali, English tutor Bali, French tutor Bali, Mandarin tutor Bali, IB Math tutor, IGCSE Science tutor"
                path="/subject-tutoring"
            />

            <Hero
                title="Subject Tutoring Excellence"
                subtitle="Mastering Mathematics, Sciences, Languages, and Humanities with Bali's finest educators."
                image={heroImage}
                ctaText="Find Your Subject Expert"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Targeted Academic Intervention</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        Academic success is not just about memorizing facts; it is about building deep conceptual understanding and the confidence to apply knowledge in new contexts. At Bali Private Tutors, we move beyond generic homework help. Our subject-specific specialists are true experts in their fields—many holding Master's degrees or PhDs—who know how to ignite a passion for learning. Learn more about our comprehensive approach to <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>private tutoring in Bali</a>.
                    </p>
                    <p>
                        Whether your child is struggling to grasp calculus concepts, needs to refine their essay-writing skills for English Literature, or wants to learn conversational Indonesian to navigate daily life in Bali, we have the right mentor for them. We provide support across all key stages, from primary school foundations to university entrance preparations.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Mathematics: From Fear to Fluency</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Primary & Middle School Math</h3>
                            <p>Math anxiety often starts young. Our primary specialists use manipulatives, games, and real-world examples (like calculating currency exchange rates in Bali) to build number sense. We focus on cementing core skills—fractions, decimals, percentages, and basic algebra—so that students enter high school with a rock-solid foundation.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>High School & Exam Prep</h3>
                            <p>For older students, mathematics often becomes the biggest hurdle. We offer specialized tutoring for:</p>
                            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                                <li><strong>IGCSE/GCSE:</strong> Extended and Core Math, Additional Math.</li>
                                <li><strong>IB Diploma:</strong> Analysis and Approaches (AA) & Applications and Interpretations (AI) at both SL and HL.</li>
                                <li><strong>A-Levels:</strong> Pure Math, Mechanics, and Statistics.</li>
                                <li><strong>SAT/ACT:</strong> Quantitative reasoning and problem-solving strategies.</li>
                            </ul>
                            <p style={{ marginTop: '10px' }}>Our tutors deconstruct complex problems, teaching students not just <em>how</em> to solve an equation, but <em>why</em> the method works. For specialized <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>IB and IGCSE tutoring in Bali</a>, our experienced educators deliver proven exam strategies.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>University Level Calculus & Statistics</h3>
                            <p>For advanced students or those taking gap years before university, we provide support in single and multivariable calculus, linear algebra, and statistical analysis. This is particularly popular among digital nomad families with university-aged children studying remotely.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Real-World Focus</h3>
                            <p>We believe math should make sense. Our tutors integrate projects like "Designing a Bamboo Villa" (geometry and area) or "Analyzing Tourism Trends" (statistics) to make abstract concepts tangible and relevant to their life in Bali.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>The Sciences: Experiential Learning</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px' }}>
                        Science comes alive in Bali. Why learn about ecology from a textbook when you have a living ecosystem outside your door?
                    </p>

                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-lime)' }}>B</div>
                        <div>
                            <h3>Biology & Environmental Systems</h3>
                            <p>Bali is a biodiversity hotspot. Our biology tutors often incorporate field studies into their lessons. Whether it's examining plant cell structures, understanding marine ecosystems for IB Environmental Systems and Societies (ESS), or studying genetics, we make the content vivid. We support coursework for IB Biology (SL/HL), IGCSE Biology, and AP Biology.</p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-midnight)' }}>C</div>
                        <div>
                            <h3>Chemistry</h3>
                            <p>Chemistry can be daunting with its abstract moles and bonding theories. Our tutors use visualization tools and safe, home-based experiments to demonstrate chemical reactions. We cover stoichiometry, organic chemistry, thermodynamics, and periodicity, providing rigorous support for IB Chemistry and A-Level Chemistry exams.</p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-turquoise)' }}>P</div>
                        <div>
                            <h3>Physics</h3>
                            <p>From understanding the mechanics of surfing waves to the thermodynamics of tropical heat, physics applies everywhere. We help students master vectors, forces, electricity, and magnetism. Our focus is on honing the problem-solving mindset required to tackle the toughest paper 2 and paper 3 questions in IB and A-Level Physics. Discover specialized <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', fontWeight: '600' }}>science tutoring in Bali</a> that brings complex concepts to life.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.featuresSection} style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Languages & Humanities</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>English Literature & Language</h3>
                            <p>Analyzing Shakespeare or crafting a persuasive essay requires critical thinking. Our English tutors help students dissect texts, structure arguments, and refine their academic voice. We support IB English A: Literature, Language & Literature, and IGCSE First/Second Language English. We also offer creative writing workshops to help students channel the inspiration of Bali into stories.</p>
                        </div>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>Bahasa Indonesia</h3>
                            <p>Living in Indonesia is an opportunity to learn a new language. We offer structured Bahasa Indonesia lessons for children and adults. From "Survival Indonesian" for ordering food and giving directions, to formal instruction for students required to take Indonesian Language at school, our native-speaking tutors make learning fun and culturally immersive.</p>
                        </div>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>Modern Foreign Languages</h3>
                            <p>Many international students need to maintain a third language. We have a network of tutors for <strong>French, Spanish, Mandarin, and German</strong>. Whether it is preparing for an IB French B oral exam or keeping up with Mandarin characters during a gap year, we have the expertise to support multilingual families.</p>
                        </div>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>Humanities (History, Geography, Economics)</h3>
                            <p>Understanding the world is more important than ever. We support History (IGCSE/IB), Geography, Psychology, and Economics. Our Economics tutors, in particular, contextualize theories using Indonesia's developing economy as a case study, making macro and microeconomics relatable and easier to understand.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2>Find the Perfect Tutor for Your Child</h2>
                    <p>Contact us today to discuss your specific subject requirements.</p>
                    <a href="/contact" className={styles.submitButton} style={{ display: 'inline-block', width: 'auto', marginTop: '20px', textDecoration: 'none' }}>Book a Consultation</a>
                </div>
            </section>
        </>
    );
};

export default SubjectTutoring;
