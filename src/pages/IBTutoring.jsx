import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css';
import heroImage from '../assets/hero_curricula.png';

const IBTutoring = () => {
    return (
        <>
            <SEO
                title="IB Tutoring in Bali | International Baccalaureate Private Tutors - PYP, MYP & DP"
                description="Expert IB tutors in Bali for Primary Years Programme (PYP), Middle Years Programme (MYP), and Diploma Programme (DP). Specialized support for all IB subjects including Math, Sciences, TOK, Extended Essay, and CAS. Villa-based tutoring in Ubud, Canggu, and Seminyak."
                keywords="IB tutor Bali, International Baccalaureate tutor Bali, IB PYP tutor, IB MYP tutor, IB DP tutor, IB Math tutor Bali, IB TOK tutor, IB Extended Essay help, IB CAS support, IB exam preparation Bali"
                path="/ib-tutoring"
            />

            <Hero
                title="IB Tutoring Excellence in Bali"
                subtitle="Expert International Baccalaureate support from PYP to DP - empowering IB students across all grade levels."
                image={heroImage}
                ctaText="Schedule IB Consultation"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Choose Our IB Tutoring Services in Bali?</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        The International Baccalaureate programme is renowned worldwide as one of the most rigorous and respected educational frameworks. Whether your child is just beginning their IB journey in the Primary Years Programme (PYP), navigating the challenges of the Middle Years Programme (MYP), or facing the demanding Diploma Programme (DP), our experienced IB tutors in Bali provide the specialized support needed for academic excellence.
                    </p>
                    <p>
                        At Bali Private Tutors, we don't just help with homework—we cultivate the critical thinking, research skills, and global mindset that the IB programme values. Our tutors include former IB examiners, coordinators from leading international schools, and subject specialists who understand the unique assessment criteria and inquiry-based learning approach that sets IB apart from other curricula.
                    </p>
                    <p>
                        Living in Bali while pursuing the IB can present unique challenges: distance from traditional resources, time zone differences for online schooling, and the need to balance rigorous academics with the island's relaxed lifestyle. We bridge these gaps by bringing world-class IB expertise directly to your villa, creating a structured learning environment that helps students thrive academically while enjoying the benefits of life in paradise.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Primary Years Programme (PYP) Tutoring</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px' }}>
                        For children aged 3-12, the PYP focuses on developing the whole child through inquiry-based learning. Our PYP specialists create engaging, hands-on learning experiences that align with the six transdisciplinary themes.
                    </p>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Inquiry-Based Learning Support</h3>
                            <p>The PYP encourages students to ask questions, investigate, and construct their own understanding. Our tutors guide students through the inquiry cycle, helping them develop research skills, critical thinking, and the confidence to explore complex questions. We design authentic learning experiences that connect to real-world issues relevant to life in Bali, making learning meaningful and memorable.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Transdisciplinary Themes</h3>
                            <p>The six PYP themes—Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works, How We Organize Ourselves, and Sharing the Planet—provide the framework for learning. Our tutors create rich, integrated units of inquiry that help students make connections across subject areas, developing a holistic understanding of concepts that transcends traditional subject boundaries.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>PYP Exhibition Preparation</h3>
                            <p>The PYP Exhibition is the culminating experience for Grade 5 students, requiring them to conduct an in-depth inquiry into a real-world issue. This independent research project can be daunting for young learners. Our tutors provide scaffolded support throughout the process: helping students choose meaningful topics, teaching research methodologies, organizing findings, and preparing confident presentations. We've guided dozens of successful PYP Exhibitions, from environmental conservation projects to cultural heritage studies.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Approaches to Learning (ATL) Skills</h3>
                            <p>The PYP emphasizes five categories of transdisciplinary skills: thinking, social, communication, self-management, and research skills. Our tutors explicitly teach these skills within the context of content learning, helping students become independent, lifelong learners. We use metacognitive strategies to help children understand their own learning processes and develop effective study habits that will serve them throughout their academic careers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Middle Years Programme (MYP) Tutoring</h2>
                    <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px' }}>
                        The MYP for ages 11-16 builds on PYP foundations, encouraging students to make practical connections between their studies and the real world. Our MYP tutors help students navigate increasingly complex subject content while developing the skills needed for success in the DP.
                    </p>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Subject-Specific Support</h3>
                            <p>The MYP comprises eight subject groups: Language and Literature, Language Acquisition, Individuals and Societies, Sciences, Mathematics, Arts, Physical and Health Education, and Design. Our tutors are specialists in their respective fields, understanding not just content but the specific assessment criteria and approaches to learning in each subject group. Whether your child needs help with mathematical investigations, scientific inquiry, or literary analysis, we provide targeted support aligned with MYP standards.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Personal Project Guidance</h3>
                            <p>The MYP Personal Project in Year 5 is a significant undertaking that requires students to explore a personal interest through an extended inquiry process. Our tutors help students identify meaningful topics, develop research questions, create realistic timelines, and produce high-quality final products and reports. We teach the process journal methodology, help students reflect critically on their learning, and prepare them for their presentations to ensure they achieve the highest possible outcomes.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Interdisciplinary Unit Support</h3>
                            <p>MYP requires at least one interdisciplinary unit per year, integrating two or more subject groups. These units can be challenging as students must make connections between disciplines and demonstrate understanding through the interdisciplinary assessment criteria. Our tutors help students identify meaningful connections, develop integrated understanding, and communicate their learning effectively across subject boundaries.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>eAssessment Preparation</h3>
                            <p>For schools offering MYP eAssessments in Year 5, our tutors provide comprehensive exam preparation. We're familiar with the on-screen examination format, question types, and assessment rubrics. We conduct practice exams under timed conditions, teach effective exam strategies, and provide detailed feedback to help students achieve their target grades and earn the IB MYP Certificate.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Diploma Programme (DP) Tutoring</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px' }}>
                        The IB Diploma Programme is academically demanding, requiring students to study six subjects alongside the core components: TOK, Extended Essay, and CAS. Our DP tutors are subject experts who help students achieve their university entrance goals.
                    </p>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Mathematics: AA & AI</h3>
                            <p>The DP offers two math courses: Analysis and Approaches (AA) for students who enjoy theoretical mathematics, and Applications and Interpretation (AI) for those who prefer practical applications. Our math tutors are experts in both pathways at both SL and HL. We help students master challenging concepts like calculus, statistics, and vectors, while teaching the problem-solving strategies and calculator skills essential for success in exams and Internal Assessments.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Sciences: Biology, Chemistry, Physics</h3>
                            <p>IB Sciences require deep conceptual understanding, practical investigation skills, and the ability to evaluate scientific information critically. Our science tutors guide students through complex topics, help them design and analyze experiments for their Internal Assessments, and prepare them thoroughly for the demanding exam format. We use real-world examples, often drawing from Bali's unique ecosystems and environmental challenges, to make abstract concepts concrete and engaging.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Languages: Language A & Language B</h3>
                            <p>Whether your child is studying their native language at Language A level or learning a new language in Language B, our language specialists help them develop the analytical and communication skills the IB demands. For Language A Literature and Language and Literature courses, we teach close reading, literary analysis, and essay writing. For Language B courses (French, Spanish, Mandarin, etc.), we develop fluency through authentic communication while preparing students for written and oral assessments.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Humanities: History, Economics, Psychology, Geography</h3>
                            <p>IB humanities subjects require students to think like historians, economists, psychologists, or geographers—analyzing sources, evaluating perspectives, and constructing evidence-based arguments. Our humanities tutors help students develop the research, critical thinking, and writing skills needed to excel. We guide them through Internal Assessment requirements, teach effective essay structures for Paper 1 and Paper 2, and help them master the content knowledge required for top marks.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Theory of Knowledge (TOK)</h3>
                            <p>TOK is unique to the IB and challenges students to reflect on the nature of knowledge itself. Many students find the philosophical nature of TOK difficult, especially the Exhibition in Year 1 and the Essay in Year 2. Our TOK specialists help students understand the key concepts (knowledge questions, areas of knowledge, ways of knowing), develop clear arguments, and choose effective real-life situations. We guide them through the assessment criteria to ensure their work meets IB standards for clarity, coherence, and critical thinking.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Extended Essay (EE)</h3>
                            <p>The 4,000-word Extended Essay is often the most challenging component of the DP. Our tutors help students navigate every stage of the EE process: choosing an appropriate research question, conducting research using appropriate methodologies, organizing their argument effectively, and meeting all the assessment criteria. We provide feedback on drafts, teach proper academic referencing (citations and bibliography), and ensure students submit polished, scholarly work that demonstrates independent research and critical thinking.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Creativity, Activity, Service (CAS)</h3>
                            <p>While CAS is not tutored in the traditional sense, our education consultants help students plan meaningful CAS experiences, particularly leveraging the unique opportunities Bali offers. We help students identify local community service projects (beach cleanups, teaching English at local schools, supporting animal welfare organizations), creative pursuits (traditional Balinese arts, performing arts, creative writing), and physical activities (surfing, yoga, hiking). We also help students maintain their CAS portfolios and write reflections that demonstrate the learning outcomes.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Exam Preparation & Strategy</h3>
                            <p>Success in IB exams requires more than content knowledge—it requires understanding command terms, managing time effectively, and knowing exactly what examiners are looking for. Our tutors conduct comprehensive exam preparation, including practice papers under timed conditions, detailed mark scheme analysis, and personalized feedback. We teach students how to approach different question types, allocate time strategically, and maximize their marks in every assessment component.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>IB Student Success Stories</h2>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"Our daughter was predicted a 5 in HL Biology but was struggling with the IA requirements. Her tutor from Bali Private Tutors helped her completely redesign her investigation, focusing on Bali's coral reef ecosystems. The practical support with data collection, analysis, and writing was invaluable. She achieved a 7 in her final exam and the Biology IA became one of her strongest pieces of work, even referenced in her university applications."</p>
                                <p><strong>- Emma R., Parent of IB DP Student in Canggu</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"The TOK Essay was giving me nightmares. I couldn't understand what they wanted or how to structure a knowledge question. My tutor broke it down into manageable steps, helped me choose a title that played to my strengths in History, and gave me detailed feedback on multiple drafts. I went from thinking I'd fail TOK to actually enjoying the process and earning an A grade. The critical thinking skills I developed have been useful in all my other DP subjects too."</p>
                                <p><strong>- Marcus T., IB DP Student, Ubud</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"Moving to Bali in Year 1 of the DP was stressful, especially knowing I had to complete my Extended Essay without the regular support of my school. My EE supervisor in Bali was phenomenal—she helped me refine my research question in English Literature, taught me how to analyze texts at a university level, and edited my drafts with detailed comments. I received an A on my EE and it became a talking point in my Cambridge interview."</p>
                                <p><strong>- Sophia L., IB Graduate, Now studying at Cambridge University</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>The IB Learner Profile: Developing Well-Rounded Students</h2>
                    <div className={styles.divider}></div>
                    <p>
                        At the heart of all IB programmes is the IB Learner Profile, which describes the attributes of internationally-minded learners. Our tutoring approach embeds these ten characteristics:
                    </p>
                    <ul style={{ maxWidth: '900px', margin: '20px auto', lineHeight: '1.8' }}>
                        <li><strong>Inquirers:</strong> We encourage curiosity and teach research skills that enable independent learning.</li>
                        <li><strong>Knowledgeable:</strong> Our tutors ensure students master the content while understanding its relevance to real-world issues.</li>
                        <li><strong>Thinkers:</strong> We teach critical and creative thinking, helping students approach problems from multiple perspectives.</li>
                        <li><strong>Communicators:</strong> Through discussion, presentation, and writing, we develop clear and confident communicators.</li>
                        <li><strong>Principled:</strong> We emphasize academic integrity, proper citation, and ethical behavior in all academic work.</li>
                        <li><strong>Open-minded:</strong> Living in Bali provides unique opportunities to appreciate diverse cultures and perspectives.</li>
                        <li><strong>Caring:</strong> We connect learning to service and social responsibility, particularly through CAS projects.</li>
                        <li><strong>Risk-takers:</strong> We create safe learning environments where students feel comfortable taking intellectual risks.</li>
                        <li><strong>Balanced:</strong> We help students manage their workload and maintain wellbeing alongside academic achievement.</li>
                        <li><strong>Reflective:</strong> Metacognition and self-assessment are integrated into every tutoring session.</li>
                    </ul>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why IB Families in Bali Choose Us</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Former IB Examiners & Teachers</h3>
                            <p>Several of our tutors have worked as IB examiners, giving them insider knowledge of what examiners look for in student responses. Others have taught in prestigious IB World Schools across Asia, Europe, and North America. This experience means we can provide insights that go far beyond textbook knowledge—we know exactly how to maximize marks in every assessment component.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Up-to-Date with IB Changes</h3>
                            <p>The IB regularly updates its curricula and assessment requirements. We stay current with all changes, attending IB workshops and accessing the latest resources through the IB Online Curriculum Centre. Whether it's the new DP Math courses introduced in 2019, recent changes to Language A, or updates to TOK and the Core, our tutors are always teaching the current specifications.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Support for International & Distance Learning Students</h3>
                            <p>Many IB families in Bali are enrolled in distance learning programmes like Pamoja Education, or attend schools with limited IB resources. We fill the gaps, providing the personalized instruction and feedback that these students need. We're experienced in coordinating with schools and online programmes to ensure our tutoring complements their core instruction.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Flexible to Your Schedule</h3>
                            <p>IB students have demanding schedules filled with coursework, CAS activities, and exam preparation. We work around your life, offering tutoring sessions at times that suit you—early morning before school, afternoons, evenings, or weekends. We can provide intensive exam preparation during school holidays or regular ongoing support throughout the two-year DP.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Start Your IB Success Journey</h2>
                    <p>Book a free consultation with our IB specialists to discuss your child's needs and goals.</p>
                    <a href="/#contact" className={styles.ctaButton}>Schedule IB Consultation</a>
                </div>
            </section>
        </>
    );
};

export default IBTutoring;
