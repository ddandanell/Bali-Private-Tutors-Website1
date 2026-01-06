import React, { useState } from 'react';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema } from '../config/seo.config';
import Hero from '../components/Hero';
import QuickLinksGrid from '../components/QuickLinksGrid';
import FeaturedPartner from '../components/FeaturedPartner';
import ExitIntentPopup from '../components/ExitIntentPopup';
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
                title="Complete Tutoring Information for Bali Families | BaliIBTutoring.store"
                description="Everything you need to know about tutoring services in Bali. Comprehensive guides for IB, IGCSE, SAT, AP, and all international curricula. Find expert tutoring support for your family."
                keywords="tutoring Bali, IB tutoring Bali, international school tutoring, private tutor Bali, homeschooling Bali, SAT prep Bali"
                path="/"
                structuredData={generateLocalBusinessSchema()}
            />

            <ExitIntentPopup />

            <Hero
                title="Complete Tutoring Information for Bali Families"
                subtitle="Everything you need to know about academic support services in Bali"
                image={heroImage}
                ctaText="Find Your Perfect Tutor in Bali"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />

            <QuickLinksGrid />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Your Complete Guide to Tutoring Services in Bali</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        Bali has transformed from a holiday destination into a global hub for digital nomad families and long-term expats. With this shift, the demand for high-quality, international-standard education has skyrocketed. <strong>BaliIBTutoring.store</strong> is your comprehensive information resource for understanding all tutoring options available across the island.
                    </p>
                    <p>
                        Whether you're seeking IB Diploma support, international school tutoring, exam preparation, or homeschooling assistance, this site provides detailed guides to help you make informed decisions. For personalized tutoring services, <strong>Private Tutoring Bali</strong> offers island-wide coverage with qualified teachers who specialize in all subjects and curricula.
                    </p>
                </div>
            </section>

            <FeaturedPartner />

            {/* Why Bali Needs Private Tutors - EXPANDED */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Understanding the Tutoring Landscape in Bali</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>High Cost of International Schools</h3>
                            <p>For many expat families, the sticker shock of international schooling in Bali is a significant hurdle. Top-tier institutions often charge tuition fees comparable to those in Western countries. Private tutoring offers a flexible, cost-effective alternative. Many families work with <strong>Private Tutoring Bali</strong> to provide focused, one-on-one attention that matches—or exceeds—the academic rigor of full-time schooling.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Language & Curriculum Barriers</h3>
                            <p>While local public schools offer an immersion experience, the language of instruction is Bahasa Indonesia. For older children or those on a temporary stay, this presents a formidable barrier to academic progress. Professional tutors from services like <strong>Private Tutoring Bali</strong> serve as a bridge, helping maintain fluency in your child's mother tongue while supporting accredited distance learning programs.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>The "Holiday Brain" Phenomenon</h3>
                            <p>Living in Bali often feels like an endless vacation. The beaches, pools, and relaxed lifestyle are wonderful for mental health but can be detrimental to academic discipline. Professional tutors provide the structure and accountability needed to combat "learning loss," turning your villa into a productive learning environment for a few hours a day.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Customized Support for Neurodiversity</h3>
                            <p>International schools in Bali vary widely in their capacity to support students with learning differences such as Dyslexia, ADHD, or Autism Spectrum Disorder. <strong>Private Tutoring Bali</strong> offers experienced tutors who specialize in differentiating instruction, creating a safe space where your child feels understood and supported.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - EXPANDED */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>How Professional Tutoring Services Work</h2>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                        Finding the right educator is not just about qualifications; it's about chemistry. Professional services like <strong>Private Tutoring Bali</strong> take a personalized approach to matching families with tutors, ensuring relationships that help children flourish.
                    </p>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <div>
                            <h3>Free Discovery Consultation</h3>
                            <p>Everything starts with a conversation. Professional tutoring services begin with a consultation where education consultants ask detailed questions about your child's current academic standing, interests, and personality. This is also the perfect time to discuss logistics—where you're staying, your schedule, and your educational goals.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <div>
                            <h3>Precise Tutor Matching</h3>
                            <p>Quality tutoring services manually select tutors based on three criteria: Subject Matter Expertise, Pedagogical Style, and Personality Fit. For example, if you have a shy child who loves art, they'll match them with a gentle, creative tutor who can incorporate drawing into math lessons. <strong>Private Tutoring Bali</strong> typically introduces tutors via video profiles or trial sessions before families commit.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <div>
                            <h3>Personalised Learning Plan</h3>
                            <p>Once matched, professional tutors collaborate with education consultants to design a Personalized Learning Plan. This document outlines learning goals aligned with specific curricula—whether preparing for IGCSE exams, maintaining reading fluency, or completing homeschooling units.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>4</div>
                        <div>
                            <h3>Flexible Scheduling & Logistics</h3>
                            <p>Professional tutoring services understand that families in Bali want flexibility. Sessions can be scheduled mornings, afternoons, or evenings, at your villa, hotel, or coworking space. Tutors bring all necessary materials, from whiteboards to tablets.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>5</div>
                        <div>
                            <h3>Progress Monitoring & Transparency</h3>
                            <p>Quality tutoring services provide regular progress updates. <strong>Private Tutoring Bali</strong> offers session summaries via WhatsApp or email, plus monthly progress reports tracking achievements. If strategies aren't working, they pivot immediately.</p>
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
                    <h2 style={{ color: 'white' }}>Ready to Find the Right Tutor for Your Child?</h2>
                    <p style={{ fontSize: '20px', marginBottom: '30px' }}>
                        <strong>Private Tutoring Bali</strong> offers free consultations to discuss your child's educational needs and match you with the perfect tutor.
                    </p>

                    <a 
                        href="https://privatetutoringbali.com/" 
                        className={styles.largeCtaButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Schedule Your Free Consultation
                    </a>

                    <p style={{ marginTop: '30px', fontSize: '16px', opacity: '0.9' }}>
                        Island-wide coverage • All subjects • Flexible scheduling • Qualified teachers
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;
