import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css'; // Reusing Home styles
import heroImage from '../assets/hero_curricula.png';

const CurriculaSupport = () => {
    return (
        <>
            <SEO
                title="Curricula Support in Bali | IB, IGCSE, A-Levels & Homeschooling - Bali Private Tutors"
                description="Comprehensive academic support for International Baccalaureate (IB PYP, MYP, DP), Cambridge IGCSE, A-Levels, Australian Curriculum, and US Common Core. Tailored for expat students in Bali."
                keywords="IB tutor Bali, IGCSE tutor Bali, A-Level tutor Bali, Australian Curriculum tutor, Homeschooling Bali, US Common Core tutor"
                path="/curricula-support"
            />

            <Hero
                title="International Curricula Experts"
                subtitle="Unrivaled support for the world's most rigorous academic frameworks, right here in Bali."
                image={heroImage}
                ctaText="Discuss Your Curriculum"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Global Standards, Personalized Delivery</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        Expat families in Bali come from all corners of the globe, bringing with them a diverse array of educational backgrounds and future aspirations. Whether your child is preparing to re-enter the British boardroom schools, aiming for an Ivy League university in the US, or simply maintaining their grade level in the Australian system, we have the specialized knowledge to support them.
                    </p>
                    <p>
                        We don't just "teach subjects"; we understand the specific assessment objectives, mark schemes, and inquiry-based learning models of the world's leading curricula. Our tutors include former IB examiners, certified teachers from the UK and Australia, and homeschooling veterans who have successfully guided hundreds of students.
                    </p>
                </div>
            </section>

            {/* IB SECTION */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>International Baccalaureate (IB) Programme</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
                        As the gold standard of international education, the IB is rigorous and demanding. We offer specialized support for all three competitive programmes.
                    </p>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Primary Years Programme (PYP)</h3>
                            <p>For our youngest learners (ages 3-12), we embrace the PYP's inquiry-led approach. Rather than rote memorization, our tutors guide children through the transdisciplinary themes (e.g., "Where We Are in Place and Time"). We support the <strong>PYP Exhibition</strong>, helping students research, organize their findings, and present their projects with confidence.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Middle Years Programme (MYP)</h3>
                            <p>The MYP (ages 11-16) serves as a critical bridge. We help students navigate the eight subject groups and the <strong>Personal Project</strong>. Our tutors focus on the "Approaches to Learning" (ATL) skills—communication, social, self-management, research, and thinking—ensuring students are not just learning facts, but learning <em>how to learn</em>.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Diploma Programme (DP)</h3>
                            <p>The DP (ages 16-19) is a high-stakes two-year course. We provide subject-specific tuition for HL/SL subjects, but crucially, we also support the core components that often cause the most stress:</p>
                            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                                <li><strong>Theory of Knowledge (TOK):</strong> Guiding the essay and presentation.</li>
                                <li><strong>Extended Essay (EE):</strong> Mentoring the research process and structuring the 4,000-word academic paper.</li>
                                <li><strong>Internal Assessments (IAs):</strong> Reviewing drafts and offering feedback on criteria.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAMBRIDGE SECTION */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Cambridge International (CIE) & UK National Curriculum</h2>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-midnight)' }}>1</div>
                        <div>
                            <h3>IGCSE / O-Levels</h3>
                            <p>The International General Certificate of Secondary Education (IGCSE) is the world's most popular international qualification for 14-16 year olds. It is content-heavy and exam-focused. Our tutors are experts in the syllabi for Cambridge (CIE) and Edexcel. We provide intensive "crash courses" for revision, past paper practice sessions to master exam technique, and long-term support to ensure A* grades in core subjects like Math, English, and Sciences.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-turquoise)' }}>2</div>
                        <div>
                            <h3>A-Levels (Advanced Level)</h3>
                            <p>Specialization is key at A-Level. Students typically choose 3-4 subjects to study in depth. Our tutors for A-Levels are subject-matter experts, often with degrees in the specific field they teach (e.g., an Engineering graduate teaching A-Level Physics). We focus on the high-level analysis and critical thinking skills required to secure top university offers in the UK and worldwide.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber} style={{ backgroundColor: 'var(--color-lime)' }}>3</div>
                        <div>
                            <h3>Key Stages 1-3 & Common Entrance</h3>
                            <p>For younger British families, we ensure children remain on track with UK standards (Key Stages 1, 2, and 3) in literacy and numeracy. We also prepare students for Common Entrance exams (11+ and 13+) for entry into prestigious UK boarding schools.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NATIONAL CURRICULA SECTION */}
            <section className={styles.featuresSection} style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Australian & US Curricula</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>Australian Curriculum (ACARA) & VCE/HSC/QCE</h3>
                            <p>With Bali being so close to Australia, many of our families hail from Down Under. We are well-versed in the Australian Curriculum (Foundation to Year 10) and the various state-based senior secondary certificates (VCE, HSC, QCE, WACE). We can help your child transition seamlessly back into their school year in Australia with no gaps in their learning.</p>
                        </div>
                        <div className={styles.reasonCard} style={{ backgroundColor: 'var(--color-pale-turquoise)' }}>
                            <h3>US Common Core & AP</h3>
                            <p>For American families, we follow the Common Core State Standards for Math and English Language Arts. For high schoolers, we offer rigorous preparation for Advanced Placement (AP) exams, which can earn university credits. We also support preparation for standardized tests like the SAT and ACT.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={`container ${styles.faqContainer}`}>
                    <h2 className={styles.sectionTitle}>Homeschooling & Unschooling Support</h2>
                    <div className={styles.introText} style={{ textAlign: 'left' }}>
                        <p style={{ marginBottom: '20px' }}>
                            Bali is a haven for homeschooling families. However, being the sole educator for your child can be exhausting. We offer a hybrid model:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                            <li><strong>Curriculum Design:</strong> We help you select and structure a homeschool curriculum that fits your lifestyle.</li>
                            <li><strong>Specialist Subject Support:</strong> You handle the day-to-day, and our tutors come in for the "tough stuff" (e.g., High School Chemistry or Algebra).</li>
                            <li><strong>Socialization & Group Classes:</strong> We can connect you with other homeschooling families or arrange small group pods for collaborative learning.</li>
                            <li><strong>Accreditation Assistance:</strong> Guidance on registering with umbrella schools or distance learning providers to ensure your child receives recognized transcripts.</li>
                        </ul>
                        <p>
                            Whether you follow a structured program or a "worldschooling" approach, our goal is to support your family's educational freedom while ensuring academic rigour.
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2>Expert Support for Every Syllabus</h2>
                    <p>Don't let curriculum complexity stress you out. Let our experts guide the way.</p>
                    <a href="/contact" className={styles.submitButton} style={{ display: 'inline-block', width: 'auto', marginTop: '20px', textDecoration: 'none' }}>Speak to a Curriculum Specialist</a>
                </div>
            </section>
        </>
    );
};

export default CurriculaSupport;
