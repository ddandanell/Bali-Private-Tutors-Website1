import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import styles from './IBTutoring.module.css';
import heroImage from '../assets/hero.png';

const IBTutoring = () => {
    return (
        <>
            <SEO
                title="IB Tutoring Bali - Expert Support for IB Diploma Students [2026]"
                description="Comprehensive guide to IB tutoring in Bali. Find qualified IB tutors for all subjects, Extended Essay support, TOK help, and exam preparation."
                keywords="IB tutoring Bali, IB tutor Bali, IB Diploma support, Extended Essay help Bali, TOK tutoring, IB exam prep"
                path="/ib-tutoring-bali"
            />

            <ExitIntentPopup />

            <Hero
                title="IB Tutoring in Bali: Complete Guide to IB Diploma Support"
                subtitle="Everything you need to know about getting expert IB support in Bali"
                image={heroImage}
                ctaText="Find Your IB Tutor in Bali"
                ctaLink="https://privatetutoringbali.com/"
                external={true}
            />

            <article className={styles.article}>
                <div className="container">
                    {/* Introduction */}
                    <section className={styles.section}>
                        <h2>Why IB Students Need Specialized Tutoring Support</h2>
                        <p>
                            The International Baccalaureate Diploma Programme (IB DP) is one of the most rigorous academic programs globally, demanding excellence across six subject groups plus three core components. For families living in Bali, whether as expats, digital nomads, or long-term residents, finding quality IB support can make the difference between academic struggle and exceptional achievement.
                        </p>
                        <p>
                            Students face unique challenges balancing the demanding IB workload with the relaxed island lifestyle. Many families seek additional support to help students excel in their coursework, prepare for examinations, and navigate the complexities of Extended Essays and Theory of Knowledge. <strong>Private Tutoring Bali</strong> specializes in IB support, offering experienced tutors who understand the unique demands of the IB Diploma programme and can provide personalized guidance tailored to each student's needs.
                        </p>
                    </section>

                    {/* Understanding IB */}
                    <section className={styles.section}>
                        <h2>Understanding the International Baccalaureate Diploma Programme</h2>
                        
                        <h3>The Six Subject Groups</h3>
                        <p>The IB Diploma requires students to study six subjects, one from each group:</p>
                        <ul className={styles.subjectList}>
                            <li><strong>Group 1: Studies in Language and Literature</strong> - Native language analysis and literature study</li>
                            <li><strong>Group 2: Language Acquisition</strong> - Foreign language learning at various proficiency levels</li>
                            <li><strong>Group 3: Individuals and Societies</strong> - History, Geography, Economics, Business Management, Psychology</li>
                            <li><strong>Group 4: Sciences</strong> - Biology, Chemistry, Physics, Computer Science, Design Technology</li>
                            <li><strong>Group 5: Mathematics</strong> - Analysis & Approaches or Applications & Interpretation</li>
                            <li><strong>Group 6: The Arts</strong> - Visual Arts, Theatre, Film, Music (or additional subject from Groups 1-5)</li>
                        </ul>

                        <h3>Core Requirements</h3>
                        <div className={styles.coreBox}>
                            <p><strong>Theory of Knowledge (TOK):</strong> A philosophical inquiry into the nature of knowledge, requiring students to critically examine different ways of knowing and areas of knowledge.</p>
                            <p><strong>Extended Essay (EE):</strong> A 4,000-word independent research project on a topic of the student's choice, developing research and academic writing skills.</p>
                            <p><strong>Creativity, Activity, Service (CAS):</strong> 18 months of experiential learning through creative pursuits, physical activities, and community service.</p>
                        </div>

                        <h3>Assessment Structure</h3>
                        <p>
                            The IB Diploma is graded on a 45-point scale: each of the six subjects can earn up to 7 points (42 points total), with an additional 3 bonus points available through combined performance in TOK and the Extended Essay. Students need a minimum of 24 points to pass the diploma, but competitive universities typically expect scores of 38 points or higher.
                        </p>
                        <p>
                            Many families in Bali trust <strong>Private Tutoring Bali</strong> for comprehensive IB support because their tutors understand this assessment structure intimately and can help students maximize their points across all components.
                        </p>
                    </section>

                    {/* Challenges */}
                    <section className={styles.section}>
                        <h2>Top Challenges IB Students Face in Bali</h2>
                        
                        <div className={styles.challengeCard}>
                            <h3>1. Time Management</h3>
                            <p>
                                The IB programme demands exceptional organizational skills. Students must balance six subjects simultaneously, each with regular homework, Internal Assessments, and examination preparation. Add to this the Extended Essay, TOK essay, TOK presentation (now exhibition), and CAS documentation, and the workload becomes overwhelming. Living in Bali's relaxed environment can make it even harder to maintain the discipline required for consistent academic performance.
                            </p>
                        </div>

                        <div className={styles.challengeCard}>
                            <h3>2. Subject-Specific Difficulties</h3>
                            <p>
                                Higher Level (HL) subjects are particularly demanding, covering significantly more content and requiring deeper understanding than Standard Level (SL). Concepts build rapidly with little room for gaps in knowledge. Mathematical approaches differ substantially from other curricula, and sciences require sophisticated experimental design and analysis skills. Students who fall behind even slightly can find it difficult to catch up without targeted support.
                            </p>
                        </div>

                        <div className={styles.challengeCard}>
                            <h3>3. Extended Essay Stress</h3>
                            <p>
                                The Extended Essay challenges students to conduct independent academic research—often for the first time. Common difficulties include choosing an appropriate research question (not too broad, not too narrow), conducting proper academic research using credible sources, meeting the 4,000-word limit while maintaining depth, and following strict citation and formatting requirements. The 18-month timeline seems long but passes quickly without proper planning.
                            </p>
                        </div>

                        <div className={styles.challengeCard}>
                            <h3>4. Theory of Knowledge Complexity</h3>
                            <p>
                                TOK introduces abstract philosophical concepts that feel foreign to most students. Understanding epistemology, linking Areas of Knowledge with Ways of Knowing, and developing sophisticated arguments about the nature of knowledge itself requires a different kind of thinking than subject-specific work. The TOK essay and exhibition are high-stakes assessments that contribute to the crucial bonus points.
                            </p>
                        </div>

                        <div className={styles.challengeCard}>
                            <h3>5. Internal Assessments</h3>
                            <p>
                                Each IB subject has unique Internal Assessment requirements. These are substantial projects completed over several months, often worth 20-30% of the final grade. From science investigations to history exhibitions, math explorations to language oral presentations, each IA demands careful planning, execution, and adherence to specific marking criteria. Students often underestimate the time and effort required.
                            </p>
                        </div>

                        <p className={styles.highlightText}>
                            <strong>Private Tutoring Bali</strong>'s experienced IB tutors have guided countless students through these challenges, providing structured support that leads to measurable improvement and significantly reduced stress levels.
                        </p>
                    </section>

                    {/* Benefits */}
                    <section className={styles.section}>
                        <h2>How IB Tutoring Transforms Student Performance</h2>
                        
                        <p>Quality IB tutoring provides benefits that extend far beyond simple grade improvement:</p>

                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitCard}>
                                <h3>Personalized Learning</h3>
                                <p>One-on-one tutoring allows focus on specific weaknesses and adapts to individual learning styles. Unlike classroom instruction, tutors can spend extra time on challenging concepts and accelerate through areas of strength.</p>
                            </div>

                            <div className={styles.benefitCard}>
                                <h3>Deeper Understanding</h3>
                                <p>IB rewards conceptual understanding over memorization. Expert tutors help students move beyond surface learning to genuine comprehension, essential for tackling novel examination questions and achieving top grades.</p>
                            </div>

                            <div className={styles.benefitCard}>
                                <h3>Exam Strategies</h3>
                                <p>Experienced IB tutors teach students how to approach different question types, manage examination time effectively, and understand what examiners look for in top-band responses. These strategies directly translate to higher marks.</p>
                            </div>

                            <div className={styles.benefitCard}>
                                <h3>Confidence Building</h3>
                                <p>Academic confidence grows through mastery. As students develop stronger understanding and see improvement in their assessments, anxiety decreases and self-belief increases—crucial for performing well under examination pressure.</p>
                            </div>

                            <div className={styles.benefitCard}>
                                <h3>Time Management Skills</h3>
                                <p>Tutors help students develop effective study schedules, prioritization strategies, and organizational systems that serve them throughout the IB programme and beyond into university studies.</p>
                            </div>

                            <div className={styles.benefitCard}>
                                <h3>Better Grades</h3>
                                <p>Research consistently shows that students receiving regular, targeted tutoring support average 5-7 points higher overall on their IB Diploma. For Extended Essay and TOK, expert guidance often secures the critical bonus points that make university offers possible.</p>
                            </div>
                        </div>

                        <p className={styles.highlightText}>
                            <strong>Private Tutoring Bali</strong> offers all these benefits through their personalized, home-based approach. Their tutors come to your location across Bali—whether in Seminyak, Canggu, Ubud, Sanur, or anywhere else on the island—making quality IB support both accessible and convenient.
                        </p>
                    </section>

                    {/* Choosing a Tutor */}
                    <section className={styles.section}>
                        <h2>Choosing the Right IB Tutor in Bali</h2>
                        
                        <p>Not all tutors are created equal. When seeking IB support, look for these essential qualifications:</p>

                        <div className={styles.qualificationsList}>
                            <div className={styles.qualItem}>
                                <h4>1. IB Experience</h4>
                                <p>The tutor must have current, hands-on experience with the IB curriculum. The programme updates regularly, and familiarity with the latest syllabi, assessment criteria, and command terms is essential.</p>
                            </div>

                            <div className={styles.qualItem}>
                                <h4>2. Subject Expertise</h4>
                                <p>Deep knowledge in specific subject areas is non-negotiable. An IB Chemistry HL tutor should have advanced chemistry qualifications and understand the intricacies of the IB assessment model for that subject.</p>
                            </div>

                            <div className={styles.qualItem}>
                                <h4>3. Teaching Credentials</h4>
                                <p>Formal education qualifications and teaching experience matter. Look for tutors with relevant degrees and, ideally, experience teaching in IB World Schools or extensive tutoring track records.</p>
                            </div>

                            <div className={styles.qualItem}>
                                <h4>4. Student Success</h4>
                                <p>A proven track record speaks volumes. Ask about previous students' grade improvements and outcomes. Reputable tutoring services can provide examples of student success without compromising confidentiality.</p>
                            </div>

                            <div className={styles.qualItem}>
                                <h4>5. Communication Skills</h4>
                                <p>The ability to explain complex concepts clearly and adapt explanations to student understanding is crucial. Great subject knowledge means little if the tutor cannot communicate effectively.</p>
                            </div>

                            <div className={styles.qualItem}>
                                <h4>6. Availability and Flexibility</h4>
                                <p>IB students have demanding schedules. Tutors need to accommodate various time slots, including evenings and weekends, and be available for extra support during crucial periods like examination season or IA deadlines.</p>
                            </div>
                        </div>

                        <p className={styles.highlightText}>
                            <strong>Private Tutoring Bali</strong> thoroughly vets all their tutors to ensure they meet these criteria. Their network includes IB specialists with years of experience helping students achieve their target grades and gain admission to competitive universities worldwide.
                        </p>
                    </section>

                    {/* All Subjects */}
                    <section className={styles.section}>
                        <h2>All IB Subjects Available for Tutoring in Bali</h2>
                        
                        <p>Comprehensive IB tutoring services in Bali cover the complete range of subjects and levels:</p>

                        <div className={styles.subjectsGrid}>
                            <div className={styles.subjectGroup}>
                                <h3>Group 1: Language and Literature</h3>
                                <ul>
                                    <li>English A: Language and Literature</li>
                                    <li>English A: Literature</li>
                                    <li>Other languages (subject to tutor availability)</li>
                                </ul>
                            </div>

                            <div className={styles.subjectGroup}>
                                <h3>Group 2: Language Acquisition</h3>
                                <ul>
                                    <li>French (ab initio, SL, HL)</li>
                                    <li>Spanish (ab initio, SL, HL)</li>
                                    <li>Mandarin Chinese (ab initio, SL, HL)</li>
                                    <li>Indonesian (ab initio, SL, HL)</li>
                                </ul>
                            </div>

                            <div className={styles.subjectGroup}>
                                <h3>Group 3: Individuals and Societies</h3>
                                <ul>
                                    <li>Business Management</li>
                                    <li>Economics</li>
                                    <li>Geography</li>
                                    <li>History</li>
                                    <li>Psychology</li>
                                    <li>Environmental Systems and Societies (ESS)</li>
                                </ul>
                            </div>

                            <div className={styles.subjectGroup}>
                                <h3>Group 4: Sciences</h3>
                                <ul>
                                    <li>Biology (SL/HL)</li>
                                    <li>Chemistry (SL/HL)</li>
                                    <li>Physics (SL/HL)</li>
                                    <li>Computer Science (SL/HL)</li>
                                    <li>Design Technology (SL/HL)</li>
                                </ul>
                            </div>

                            <div className={styles.subjectGroup}>
                                <h3>Group 5: Mathematics</h3>
                                <ul>
                                    <li>Mathematics: Analysis and Approaches SL</li>
                                    <li>Mathematics: Analysis and Approaches HL</li>
                                    <li>Mathematics: Applications and Interpretation SL</li>
                                    <li>Mathematics: Applications and Interpretation HL</li>
                                </ul>
                            </div>

                            <div className={styles.subjectGroup}>
                                <h3>Group 6: The Arts</h3>
                                <ul>
                                    <li>Visual Arts</li>
                                    <li>Theatre</li>
                                    <li>Film</li>
                                    <li>Music</li>
                                </ul>
                            </div>

                            <div className={styles.subjectGroup}>
                                <h3>Core Components</h3>
                                <ul>
                                    <li>Theory of Knowledge (TOK)</li>
                                    <li>Extended Essay (all subjects)</li>
                                    <li>CAS guidance and planning</li>
                                </ul>
                            </div>
                        </div>

                        <p className={styles.highlightText}>
                            <strong>Private Tutoring Bali</strong> provides expert tutors for every IB subject and level. Whatever your student's subject combination, they have qualified teachers ready to provide targeted support.
                        </p>
                    </section>

                    {/* Service Provider Box */}
                    <ServiceProviderBox pageSpecificTopic="IB Diploma success across all subject groups, Extended Essay guidance, TOK support, and comprehensive examination preparation" />

                    {/* Extended Essay */}
                    <section className={styles.section}>
                        <h2>Extended Essay Tutoring: From Topic to Submission</h2>
                        
                        <p>The Extended Essay (EE) is one of the most challenging components of the IB Diploma. This 4,000-word research paper requires students to demonstrate independent research skills, critical thinking, and academic writing proficiency.</p>

                        <h3>Common Extended Essay Challenges</h3>
                        <ul>
                            <li>Selecting an appropriate research question that is neither too broad nor too narrow</li>
                            <li>Narrowing scope while maintaining sufficient depth for 4,000 words</li>
                            <li>Conducting proper academic research using credible sources</li>
                            <li>Structuring arguments effectively with clear thesis and evidence</li>
                            <li>Meeting IB formatting requirements (citations, bibliography, etc.)</li>
                            <li>Managing the extended 18-month timeline without procrastination</li>
                        </ul>

                        <h3>How Professional EE Support Helps</h3>
                        <p>Experienced Extended Essay tutors guide students through a structured process:</p>
                        <ol>
                            <li><strong>Topic Selection:</strong> Brainstorming potential topics and refining them into focused research questions that meet EE requirements</li>
                            <li><strong>Research Methodology:</strong> Teaching proper academic research techniques, source evaluation, and note-taking strategies</li>
                            <li><strong>Drafting Process:</strong> Supporting students through multiple revision cycles, from outline to final draft</li>
                            <li><strong>Citation Training:</strong> Ensuring proper use of MLA, APA, or Chicago formatting as required by the subject</li>
                            <li><strong>Reflection Sessions:</strong> Facilitating the required Researcher's Reflection Space (RRS) sessions</li>
                            <li><strong>Final Polish:</strong> Proofreading and formatting review before final submission</li>
                        </ol>

                        <div className={styles.infoBox}>
                            <h4>Extended Essay Grading Criteria</h4>
                            <ul>
                                <li>Criterion A: Focus and Method (6 marks)</li>
                                <li>Criterion B: Knowledge and Understanding (6 marks)</li>
                                <li>Criterion C: Critical Thinking (12 marks)</li>
                                <li>Criterion D: Presentation (4 marks)</li>
                                <li>Criterion E: Engagement (6 marks)</li>
                                <li><strong>Total: 34 marks</strong> (combined with TOK for up to 3 bonus points)</li>
                            </ul>
                        </div>

                        <p className={styles.highlightText}>
                            <strong>Private Tutoring Bali</strong> offers specialized Extended Essay support with tutors experienced in guiding students to achieve A or B grades, securing those crucial bonus points that often make the difference in university admissions.
                        </p>
                    </section>

                    {/* TOK */}
                    <section className={styles.section}>
                        <h2>Theory of Knowledge (TOK) Tutoring: Mastering Abstract Concepts</h2>
                        
                        <p>Theory of Knowledge is unique in the IB curriculum—a philosophical inquiry into the nature of knowledge itself. For many students, TOK represents unfamiliar intellectual territory.</p>

                        <h3>TOK Components</h3>
                        <ul>
                            <li><strong>TOK Essay:</strong> 1,600-word response to one of six prescribed titles, exploring epistemological questions</li>
                            <li><strong>TOK Exhibition:</strong> Commentary on how TOK manifests in the world, demonstrated through three objects and curatorial rationale</li>
                            <li><strong>Core Theme:</strong> Knowledge and the Knower</li>
                            <li><strong>Optional Themes:</strong> Knowledge and Technology, Knowledge and Language, Knowledge and Politics, Knowledge and Religion, Knowledge and Indigenous Societies</li>
                        </ul>

                        <h3>Why TOK Is Challenging</h3>
                        <p>Students struggle with TOK for several reasons:</p>
                        <ul>
                            <li>Abstract philosophical concepts feel disconnected from other academic work</li>
                            <li>Requires different thinking style—analyzing knowledge itself rather than learning content</li>
                            <li>Essay and exhibition both require sophisticated argumentation skills</li>
                            <li>High-stakes component: combined TOK/EE grade contributes bonus points crucial for competitive university offers</li>
                        </ul>

                        <h3>TOK Tutoring Benefits</h3>
                        <p>Specialized TOK tutors help students by:</p>
                        <ul>
                            <li>Breaking down complex epistemological questions into understandable components</li>
                            <li>Developing real-world knowledge questions and examples</li>
                            <li>Structuring essays for maximum clarity and marks</li>
                            <li>Planning and curating exhibitions that demonstrate deep TOK understanding</li>
                            <li>Building critical thinking and argumentation skills</li>
                        </ul>

                        <p className={styles.highlightText}>
                            Many IB students find TOK particularly challenging. <strong>Private Tutoring Bali</strong>'s TOK specialists help demystify these concepts and guide students to strong performances in both the essay and exhibition components.
                        </p>
                    </section>

                    {/* Exam Prep */}
                    <section className={styles.section}>
                        <h2>IB Exam Preparation: Strategies for Success</h2>
                        
                        <p>Effective IB examination preparation requires long-term planning and systematic revision strategies. Success comes from consistent effort over time, not last-minute cramming.</p>

                        <h3>Recommended Timeline for Exam Preparation</h3>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <strong>18 Months Before Exams:</strong> Begin building strong subject foundations. Focus on understanding concepts deeply rather than memorization.
                            </div>
                            <div className={styles.timelineItem}>
                                <strong>12 Months Before Exams:</strong> Start systematic revision schedules. Begin creating revision materials (notes, flashcards, concept maps).
                            </div>
                            <div className={styles.timelineItem}>
                                <strong>6 Months Before Exams:</strong> Intensive practice with past papers. Analyze mark schemes to understand examiner expectations.
                            </div>
                            <div className={styles.timelineItem}>
                                <strong>3 Months Before Exams:</strong> Focus on identified weak areas. Increase practice frequency. Refine examination techniques.
                            </div>
                            <div className={styles.timelineItem}>
                                <strong>Final Month:</strong> Timed practice examinations under realistic conditions. Stress management and maintaining wellbeing.
                            </div>
                        </div>

                        <h3>Effective Study Techniques for IB</h3>
                        <ul>
                            <li><strong>Active Recall:</strong> Testing yourself on material rather than passively re-reading notes</li>
                            <li><strong>Spaced Repetition:</strong> Reviewing material at increasing intervals for long-term retention</li>
                            <li><strong>Past Paper Practice:</strong> Familiarizing with question styles, command terms, and timing</li>
                            <li><strong>Mark Scheme Analysis:</strong> Understanding how examiners award points and what they look for</li>
                            <li><strong>Concept Mapping:</strong> Visualizing connections between topics and ideas</li>
                            <li><strong>Flashcard Systems:</strong> Efficient memorization of key terms, definitions, and processes</li>
                        </ul>

                        <h3>Subject-Specific Exam Strategies</h3>
                        <ul>
                            <li><strong>Sciences:</strong> Command term recognition, showing all working, drawing accurate diagrams, proper units</li>
                            <li><strong>Mathematics:</strong> Understanding process marks vs. answer marks, calculator efficiency, checking reasonableness</li>
                            <li><strong>Essays:</strong> Strong thesis statements, structured paragraphs, integrated evidence, sophisticated analysis</li>
                            <li><strong>Languages:</strong> Vocabulary breadth, grammatical accuracy, awareness of text types and conventions</li>
                        </ul>

                        <p className={styles.highlightText}>
                            <strong>Private Tutoring Bali</strong> incorporates these proven strategies into their IB tutoring sessions, ensuring students not only understand content but can demonstrate knowledge effectively under exam conditions.
                        </p>
                    </section>

                    {/* Pricing */}
                    <section className={styles.section}>
                        <h2>Understanding IB Tutoring Investment in Bali</h2>
                        
                        <p>Quality IB tutoring represents a significant investment in your child's academic future. Understanding the value proposition helps families make informed decisions.</p>

                        <h3>Factors Affecting Tutoring Costs</h3>
                        <ul>
                            <li><strong>Tutor Qualifications:</strong> More experienced tutors with advanced degrees typically command higher rates</li>
                            <li><strong>Subject Complexity:</strong> Higher Level subjects often cost more than Standard Level due to greater content depth</li>
                            <li><strong>Session Length and Frequency:</strong> Longer sessions and more frequent meetings affect total investment</li>
                            <li><strong>Individual vs. Group:</strong> One-on-one tutoring costs more but provides maximum personalization</li>
                            <li><strong>Location:</strong> Travel requirements within Bali may influence pricing</li>
                        </ul>

                        <h3>Return on Investment</h3>
                        <p>Consider the significant returns from quality IB tutoring:</p>
                        <ul>
                            <li>Higher IB scores lead to better university placements and scholarship opportunities</li>
                            <li>Strong grades can result in advanced standing or course credits at universities</li>
                            <li>Reduced stress and improved mental health have immeasurable value</li>
                            <li>Life-long study skills and learning strategies developed through tutoring</li>
                            <li>Potential to achieve university offers that might otherwise be missed</li>
                        </ul>

                        <h3>Cost-Effective Options</h3>
                        <ul>
                            <li>Group tutoring with 2-4 students sharing similar needs</li>
                            <li>Intensive block booking discounts for committed families</li>
                            <li>Online sessions (often lower cost than in-person)</li>
                            <li>Strategic subject focus rather than all-subject support</li>
                            <li>Targeted timing (intensive support during examination periods rather than year-round)</li>
                        </ul>

                        <p className={styles.highlightText}>
                            <strong>Private Tutoring Bali</strong> offers competitive pricing with flexible packages to suit different budgets. Contact them for a free consultation to discuss options tailored to your family's needs and your student's academic goals.
                        </p>
                    </section>

                    {/* Conclusion */}
                    <section className={styles.section}>
                        <h2>Taking the Next Step in Your IB Journey</h2>
                        
                        <p>
                            The IB Diploma is undeniably challenging, but with the right support, every student can achieve their goals. Whether your student needs help with specific subjects, Extended Essay guidance, examination preparation, or comprehensive support across the entire programme, quality tutoring makes all the difference.
                        </p>
                        <p>
                            Bali offers excellent resources for IB students, and connecting with experienced tutors who understand the curriculum intimately is the key to success. Don't wait until stress levels rise or grades begin to slip—proactive support sets students up for excellence from the start.
                        </p>
                        <p className={styles.finalCTA}>
                            <strong>Private Tutoring Bali</strong> is ready to support your IB student's journey. With island-wide coverage, flexible scheduling, and tutors who genuinely care about student success, they provide the personalized attention that helps IB students thrive. Schedule a free consultation today to discuss your student's needs and create a customized support plan.
                        </p>
                    </section>

                    {/* Footer CTA */}
                    <FooterCTA />
                </div>
            </article>
        </>
    );
};

export default IBTutoring;
