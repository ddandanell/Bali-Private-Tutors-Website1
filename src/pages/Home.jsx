import React, { useState } from 'react';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema } from '../config/seo.config';
import Hero from '../components/Hero';
import styles from './Home.module.css';
import heroImage from '../assets/hero.png';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
                {question}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
        </div>
    );
};

const Home = () => {
    return (
        <>
            <SEO
                title="Private Tutors in Bali | Villa Learning Services & International Curriculum Experts"
                description="Find qualified private tutors in Bali for math, languages, science and test preparation. Our tutors come to your villa, follow international curricula (IB, IGCSE, AP) and tailor lessons for expat families."
                keywords="private tutor Bali, villa tutoring Bali, expat tutoring Bali, Bali private tutors, international curriculum tutor Bali, IB tutor Bali, IGCSE tutor Bali"
                path="/"
                structuredData={generateLocalBusinessSchema()}
            />

            <Hero
                title="Private Tutors in Bali"
                subtitle="Expert curriculum support and language learning in the comfort of your villa."
                image={heroImage}
                ctaText="Book a Free Consultation"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>World-Class Education in a Tropical Paradise</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        Bali has transformed from a holiday destination into a global hub for digital nomad families and long-term expats. With this shift, the demand for high-quality, international-standard education has skyrocketed. At <strong>Bali Private Tutors</strong>, we bridge the gap between traditional schooling and personalized academic excellence, ensuring your child thrives in their new environment.
                    </p>
                    <p>
                        Whether you are visiting for a month or settling down for a year, our network of qualified, background-checked educators brings the classroom to your villa. We specialize in international curricula (IB, IGCSE, UK, US, Australian) and offer bespoke language programs to help children integrate into the local culture.
                    </p>
                </div>
            </section>

            {/* Why Bali Needs Private Tutors - EXPANDED */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Bali Needs Private Tutors: Navigating the Landscape</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>High Cost of International Schools</h3>
                            <p>For many expat families, the sticker shock of international schooling in Bali is a significant hurdle. Top-tier institutions often charge tuition fees comparable to those in Western countries, with additional capital levies, enrollment fees, and building funds that can amount to thousands of dollars annually. Furthermore, these schools often have long waiting lists. Private tutoring offers a flexible, cost-effective alternative. By hiring a dedicated tutor, you can provide your child with focused, one-on-one attention that matches—or exceeds—the academic rigor of full-time schooling, without the exorbitant overhead costs.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Language & Curriculum Barriers</h3>
                            <p>While local public schools offer an immersion experience, the language of instruction is Bahasa Indonesia. For older children or those on a temporary stay, this presents a formidable barrier to academic progress. Even "National Plus" schools, which combine Indonesian and international curricula, are required to teach Indonesian civics and religion, which may not align with an expat child's educational goals. Our tutors serve as a bridge. We can help maintaining fluency in your child's mother tongue, support them through an accredited online distance learning program, or accelerate their Bahasa Indonesia skills so they can integrate socially with local peers.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>The "Holiday Brain" Phenomenon</h3>
                            <p>Living in Bali often feels like an endless vacation. The beaches, pools, and relaxed lifestyle are wonderful for mental health but can be detrimental to academic discipline. Children often struggle to maintain focus in such a stimulating environment. Our tutors provide the structure and accountability needed to combat "learning loss." We turn your villa into a productive learning environment for a few hours a day, allowing your children to enjoy the island lifestyle without falling behind their peers back home.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Customized Support for Neurodiversity</h3>
                            <p>International schools in Bali vary widely in their capacity to support students with learning differences such as Dyslexia, ADHD, or Autism Spectrum Disorder. Large class sizes often mean that individual needs are overlooked. Our private tutors are experienced in differentiating instruction. We create a safe, psychological space where your child feels understood and supported, using multi-sensory teaching methods that cater to their unique learning profile.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - EXPANDED */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Proven Process</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                        Finding the right educator is not just about qualifications; it's about chemistry. We take a personalized approach to matching families with tutors, ensuring a relationship that helps your child flourish.
                    </p>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <div>
                            <h3>Free Discovery Consultation</h3>
                            <p>Everything starts with a conversation. You can schedule a call via our website or message us directly on WhatsApp. During this 20-minute consultation, our senior education consultant will ask detailed questions about your child's current academic standing, their interests, and their personality. We also discuss your logistics—where you are staying, your internet connectivity, and your schedule. This is also the perfect time to ask us about life in Bali, visa requirements for schooling, and recommended resources.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <div>
                            <h3>Precise Tutor Matching</h3>
                            <p>We do not use algorithms. Our team manually selects a tutor from our exclusive roster based on three criteria: Subject Matter Expertise, Pedagogical Style, and Personality Fit. For example, if you have a shy child who loves art, we will match them with a gentle, creative tutor who can incorporate drawing into math lessons. We typically introduce the tutor via a video profile or a trial 30-minute session (villa visit) before you commit to a package.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <div>
                            <h3>Personalised Learning Plan (PLP)</h3>
                            <p>Once matched, the tutor and education consultant collaborate to design a PLP. This document outlines the learning goals for your time in Bali. Is the goal to prepare for upcoming IGCSE exams? To maintain reading fluency over a summer break? Or to complete a specific term of a homeschooling curriculum? We align resources, textbooks, and online tools to these goals. For IB students, we map our sessions directly to the inquiry units they would be missing in school.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>4</div>
                        <div>
                            <h3>Flexible Scheduling & Logistics</h3>
                            <p>We understand that you are in Bali to enjoy life. Our scheduling is designed to be flexible. We offer morning sessions for homeschoolers and afternoon/evening sessions for students attending school who need extra help. For tourists, we offer "Holiday Boost" packages (e.g., 2 hours/day for 2 weeks). Sessions take place at your villa, hotel, or a quiet coworking space. Our tutors bring all necessary materials, including whiteboards, manipulatives, and tablets if required.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>5</div>
                        <div>
                            <h3>Progress Monitoring & Transparency</h3>
                            <p>You will never be in the dark about your child's progress. Tutors provide a brief summary after each session via WhatsApp or email. On a monthly basis, we provide a formal progress report tracking their achievements against the goals set in the PLP. If we notice a strategy isn't working, we pivot immediately. We also facilitate regular check-ins with parents to discuss any behavioral or motivational shifts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Success Stories & Testimonials</h2>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <img src={testimonial1} alt="Tutor teaching in a villa in Ubud" className={styles.testimonialImage} />
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"Our 12-year-old son was struggling to keep up with his IB coursework when we relocated to Ubud. The transition was tough, and he was falling behind in Mathematics and Science. Our tutor not only aligned lessons with the school's syllabus but also integrated cultural field trips to rice paddies to explain biology concepts. He improved his math grade from a 3 to a 6 within one term and newfound confidence."</p>
                                <p><strong>- Sarah & Mark, Long-term Residents in Ubud</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <img src={testimonial2} alt="Private tutor Bali villa session" className={styles.testimonialImage} />
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"During our six-week stay in Seminyak, we were worried our 7-year-old would lose her reading momentum. We hired a tutor to come to our villa three mornings a week. She was incredible—bringing books, art supplies, and high energy. It gave us parents a few hours of freedom, and our daughter actually looked forward to 'school time' by the pool. We were impressed by her professionalism and flexibility."</p>
                                <p><strong>- The Henderson Family, Tourists from Australia</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW FAQ Section */}
            <section className={styles.faqSection}>
                <div className={`container ${styles.faqContainer}`}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <FAQItem
                        question="Do your tutors speak English fluently?"
                        answer="Yes, absolutely. All our tutors are either native English speakers or have near-native fluency with IELTS scores of 8.0+. Many have obtained their university degrees in English-speaking countries (Australia, UK, USA) or have taught in international schools for years."
                    />
                    <FAQItem
                        question="Can you help with specific curricula like the Australian Curriculum or US Common Core?"
                        answer="Yes. We have specialized tutors for all major international curricula, including the Australian Curriculum (ACARA), US Common Core, UK National Curriculum (Key Stages 1-4), and the International Baccalaureate (PYP, MYP, DP). When you book, we match you specifically with a tutor experienced in your child's syllabus."
                    />
                    <FAQItem
                        question="Where do the tutoring sessions take place?"
                        answer="We come to you! The vast majority of our sessions are conducted in the comfort of your private villa, hotel suite, or residence. This saves you travel time in Bali's busy traffic. If you prefer a neutral location, we can arrange sessions at family-friendly coworking spaces or quiet cafes in your area."
                    />
                    <FAQItem
                        question="Is there a minimum number of hours we must book?"
                        answer="For short-term visitors, we have a minimum booking of 5 hours, which can be spread over your stay. For long-term residents, we usually recommend a regular schedule of at least 2 sessions per week to ensure consistent progress. We offer discounted packages for blocks of 10, 20, or 40 hours."
                    />
                    <FAQItem
                        question="What happens if we need to cancel a session?"
                        answer="We understand that life in Bali can be unpredictable (ceremonies, traffic, illness). We require 24 hours' notice for cancellations without penalty. Sessions cancelled with less than 24 hours' notice will be charged at 50% of the session fee, as our tutors have reserved that time specifically for you."
                    />
                    <FAQItem
                        question="Do you offer online tutoring if we leave Bali?"
                        answer="Yes! Many of our families continue with their favorite tutor online after they return home or move to their next destination. This ensures continuity in your child's education and allows them to maintain the bond they've built with their mentor."
                    />
                </div>
            </section>

            {/* Call to Action & Contact Form */}
            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready to Enhance Your Child's Education?</h2>
                    <p>Book a free consultation with our education consultants today.</p>

                    <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Parent's Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="email@example.com" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone / WhatsApp</label>
                            <input type="tel" id="phone" placeholder="+62..." required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="details">Child's Age & Needs</label>
                            <textarea id="details" rows="3" placeholder="E.g., 10 years old, needs help with Math IB..."></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="location">Preferred Location</label>
                            <select id="location">
                                <option value="seminyak">Seminyak</option>
                                <option value="canggu">Canggu</option>
                                <option value="ubud">Ubud</option>
                                <option value="sanur">Sanur</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <button type="submit" className={styles.submitButton}>Request Free Consultation</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Home;
