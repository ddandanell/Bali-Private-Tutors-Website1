import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css';
import heroImage from '../assets/hero_subjects.png';
import ServiceProviderBox from '../components/ServiceProviderBox';
import FooterCTA from '../components/FooterCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';

const EnglishTutoring = () => {
    return (
        <>
            <SEO
                title="English Tutors in Bali | English Language & Literature Private Tutoring"
                description="Expert English tutors in Bali for reading, writing, literature, ESL, IGCSE English, IB Language A, and A-Level English. Comprehensive support for all levels from primary to university entrance."
                keywords="English tutor Bali, English literature tutor, ESL tutor Bali, IGCSE English tutor, IB English tutor, A-Level English tutor, writing tutor Bali, reading comprehension"
                path="/english-tutoring"
            />

            <Hero
                title="English Language & Literature Tutoring"
                subtitle="Develop confident readers, persuasive writers, and sophisticated literary analysts with Bali's finest English specialists."
                image={heroImage}
                ctaText="Find Your English Tutor"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Master the Language of Opportunity</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        English proficiency is the foundation for academic success, professional opportunity, and confident communication in our globalized world. Whether your child is developing foundational literacy skills, refining analytical writing for university entrance, exploring literary classics, or learning English as an additional language, our expert English tutors provide personalized instruction that develops genuine competence and confidence. At Bali Private Tutors, we recognize that English encompasses multiple skills—reading comprehension, creative and analytical writing, speaking and presentation, literary analysis, grammar and mechanics—and we tailor our teaching to each student's specific needs and goals.
                    </p>
                    <p>
                        Our English specialists include published authors, former teachers from prestigious international schools, university lecturers, CELTA-certified ESL instructors, and passionate lovers of literature who inspire students to engage deeply with texts. They understand not just the technical aspects of English but how to spark genuine interest in reading and writing. Whether preparing for rigorous exams like IGCSE English Literature, IB Language A, or A-Level English, or simply developing the communication skills needed for life success, our tutors provide the expert guidance that creates capable, confident users of English.
                    </p>
                    <p>
                        Bali's international community and English-rich environment provide authentic contexts for language development. Our tutors leverage these opportunities—from discussing books at beach cafes to practicing presentations in real-world settings—while providing the structured instruction needed for academic achievement. Whether your child is a native English speaker refining advanced skills or an ESL learner building fluency, we offer the personalized support that accelerates progress.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Early Literacy & Primary English (Ages 4-11)</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Reading Foundations (Ages 4-7)</h3>
                            <p>Early reading instruction builds the foundation for all future learning. Our literacy specialists teach phonemic awareness (recognizing and manipulating sounds), phonics (sound-symbol relationships), fluency (reading smoothly and expressively), vocabulary development, and comprehension strategies. We use systematic, research-based approaches including synthetic phonics and balanced literacy methods. For children who struggle with reading, we provide intensive, multisensory interventions based on Orton-Gillingham principles. We make reading joyful through engaging books, games, and meaningful reading experiences while building the technical skills that create independent readers.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Reading Comprehension & Analysis</h3>
                            <p>As children become fluent decoders, comprehension becomes the focus. We teach active reading strategies: making predictions, asking questions, making connections, visualizing, determining importance, and synthesizing information. Students learn to understand both narrative and informational texts, identify main ideas and supporting details, make inferences, understand text structures, and analyze author's purpose and perspective. We use high-quality children's literature—from picture books to chapter books to middle-grade novels—to develop both reading skill and love of reading.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Writing Development</h3>
                            <p>Strong writing skills develop gradually through modeling, practice, and feedback. We teach the writing process (planning, drafting, revising, editing, publishing) across multiple genres: narrative (personal narratives, fiction stories), informational (reports, explanations, instructions), and opinion/persuasive writing. Students learn to generate ideas, organize thoughts, develop content, use descriptive language, construct sentences with variety, paragraph writing, and editing for conventions (spelling, punctuation, grammar). We provide extensive feedback while maintaining students' confidence and enthusiasm for writing.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Grammar, Spelling & Vocabulary</h3>
                            <p>We teach grammar not as isolated rules but as tools for effective communication. Students learn parts of speech, sentence structure, punctuation, and mechanics through authentic writing contexts. For spelling, we use systematic word study approaches that teach patterns, rules, and etymology. Vocabulary instruction is embedded in rich reading experiences and explicit teaching of high-utility academic vocabulary. We help students understand how English works while developing the conventions needed for clear, correct writing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Middle & High School English (Ages 11-18)</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Literary Analysis & Close Reading</h3>
                            <p>Analyzing literature requires moving beyond surface-level comprehension to examine how texts create meaning through language, structure, and literary devices. We teach close reading techniques, help students identify themes, analyze characterization, understand symbolism and metaphor, examine narrative perspective, analyze poetic techniques, and understand how context influences meaning. Students learn to support interpretations with textual evidence, write analytical essays, and participate in sophisticated literary discussions. We study diverse texts—from Shakespeare to contemporary young adult literature, from classical poetry to modern drama.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Essay Writing & Composition</h3>
                            <p>Strong essay writing is essential for academic success across all subjects. We teach thesis development, essay organization and structure, paragraph development with topic sentences and supporting evidence, integration of quotations and citations, analysis versus summary, argumentation and persuasion, synthesis of multiple sources, and revision strategies. Students learn different essay types: literary analysis, argumentative essays, research papers, comparative essays, and personal narratives. We provide detailed feedback on drafts, teaching students to revise substantially rather than just edit surface errors.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Creative Writing</h3>
                            <p>For students interested in creative expression, we offer specialized instruction in fiction writing (short stories, novels), poetry (various forms and techniques), playwriting, creative nonfiction, and personal essays. Our creative writing tutors teach craft elements (character, plot, setting, dialogue, point of view, imagery, voice) through writing exercises, workshops, and study of mentor texts. Students develop their unique voices while learning the techniques of effective storytelling. We help students prepare portfolios for competitions, publications, and university creative writing program applications.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Public Speaking & Presentation</h3>
                            <p>Oral communication skills are crucial for academic and professional success but often neglected in traditional curricula. We teach speech writing, presentation design, delivery techniques (voice, gesture, eye contact, presence), handling questions, debate skills, and overcoming speaking anxiety. Students practice through presentations, debates, poetry recitations, dramatic readings, and formal speeches. For students preparing for IB oral assessments, TOK presentations, or university interviews, we provide targeted preparation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Curriculum-Specific English Support</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>IGCSE English Language & Literature</h3>
                            <p>Cambridge IGCSE offers separate qualifications in English Language (0500/0990) and English Literature (0475/0992). For English Language, we teach reading comprehension of complex texts, summary writing, directed writing for specific purposes and audiences, descriptive and narrative composition, and analysis of writer's effects. For English Literature, we guide students through their set texts (drama, poetry, prose), teach close reading and analysis, develop sophisticated written responses, and prepare for both coursework and exam options. We're intimately familiar with Cambridge mark schemes and what examiners seek in responses.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>IB Language A (Literature & Language and Literature)</h3>
                            <p>IB Language A courses are among the most demanding high school English qualifications. For Literature, students study works from multiple genres, periods, and cultures, developing sophisticated analytical skills through prescribed texts and world literature. For Language and Literature, the focus extends to non-literary texts and media, exploring how language constructs meaning and identity. We help students master the required assessments: Paper 1 (unseen analysis), Paper 2 (comparative essay), Individual Oral, and either the HL Essay or SL Written Assignment. Our IB English specialists teach the specific approaches IB examiners reward.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>A-Level English Literature & Language</h3>
                            <p>British A-Levels in English Literature and English Language require deep subject knowledge and sophisticated analytical writing. For Literature, students study texts from different periods (including pre-1900), analyzing them in literary, cultural, and historical contexts. They must write extended essays demonstrating independent critical thinking. For Language, the focus is on linguistic analysis—how language varies across contexts, how language develops and changes, how language constructs identity and power relations. We provide comprehensive support for coursework and exam preparation, teaching the analytical frameworks and writing styles A-Level examiners expect.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>AP English Language & Literature</h3>
                            <p>The College Board's AP English courses prepare students for college-level work. AP English Language focuses on rhetoric and argumentation—analyzing non-fiction texts, understanding rhetorical strategies, and constructing persuasive arguments. AP English Literature focuses on literary analysis of fiction, drama, and poetry. Both courses require timed essay writing under pressure. We teach the specific skills these exams demand: rhetorical analysis, argumentation, synthesis of sources, close reading, and effective essay writing under time constraints. Our AP English tutors help students achieve scores of 4 or 5 that earn college credit.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>English Success Stories</h2>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"My daughter was a reluctant reader who avoided books. Her tutor found texts that matched her interests—adventure stories, mysteries—and made reading feel like a treat rather than homework. They discussed books like friends talking about a good movie. Within months, she was reading voluntarily and her reading level jumped two years. More importantly, she now loves reading. That gift will last her lifetime."</p>
                                <p><strong>- Sandra K., Parent in Seminyak</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"I was predicted a 5 in IB English A Literature and needed a 6 for my university offer. My tutor helped me understand how to analyze texts at the level IB requires. She taught me to move beyond identifying devices to analyzing their effects, to develop sophisticated arguments, and to write with the precision IB examiners reward. My Individual Oral became my strongest component, and I achieved my 6. The analytical skills I developed in those tutoring sessions have been invaluable in my university literature degree."</p>
                                <p><strong>- Thomas R., Former IB Student, Now at Durham University</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"English is my second language, and I struggled with the academic writing required at A-Level. My tutor didn't just correct my mistakes—she taught me how English academic writing works: how to structure arguments, use appropriate register, integrate evidence, and write with clarity. She was patient with my grammatical errors while pushing me to develop sophisticated ideas. I achieved an A in A-Level English Literature and am now studying Law, where those writing skills are essential."</p>
                                <p><strong>- Yuki T., Former A-Level Student, Now Law Student</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>English as a Second/Additional Language (ESL/EAL)</h2>
                    <div className={styles.divider}></div>
                    <p>
                        For students learning English as an additional language, we offer specialized ESL/EAL instruction that develops all four language skills: listening, speaking, reading, and writing. Our approach depends on students' age, current proficiency level, and goals.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        <strong>Young Learners (Ages 4-12):</strong> We use communicative, play-based approaches that make language learning natural and enjoyable. Through games, songs, stories, and meaningful communication, children develop conversational fluency while building vocabulary and grammatical structures. We create immersive English environments during tutoring sessions while respecting and valuing students' home languages.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        <strong>Academic English (Ages 12+):</strong> Older students need academic English proficiency for success in English-medium schools and universities. We teach academic vocabulary, complex grammatical structures, academic reading strategies, formal writing conventions, note-taking, essay structure, and presentation skills. We help students transition from conversational fluency to the sophisticated language use required in academic contexts.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        <strong>IELTS & TOEFL Preparation:</strong> For students requiring English proficiency certifications for university entrance or immigration, we provide comprehensive test preparation. We teach specific strategies for each section (reading, writing, listening, speaking), conduct practice tests, provide feedback on writing and speaking, and build the test-taking skills and confidence needed for high scores.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        <strong>IGCSE English as a Second Language:</strong> This Cambridge qualification is specifically designed for non-native English speakers. We prepare students for the exam format, teach the specific task types (reading comprehension, email writing, summary, essay, listening comprehension, speaking), and develop the language proficiency and exam technique needed to achieve top grades. For comprehensive English language support tailored to your child's needs, families in Bali can connect with qualified tutors through <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-turquoise)', textDecoration: 'underline' }}>Private Tutoring Bali</a>.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>University Entrance Writing Support</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Personal Statement & Essays</h3>
                            <p>University applications require compelling personal statements (UCAS for UK universities) or personal essays (Common Application for US universities). These are crucial for admissions but difficult to write—students must showcase their achievements, explain their motivations, demonstrate intellectual curiosity, and convey personality, all within strict word limits. Our tutors guide students through the entire process: brainstorming topics, structuring content, developing narrative voice, refining and polishing drafts. We help students tell their stories authentically while meeting what admissions offices seek.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Supplemental Essays & Short Answers</h3>
                            <p>Beyond main personal statements, many universities require supplemental essays: Why This University?, Why This Major?, Describe an Activity, Diversity Statements, and more. Each has specific requirements and strategies. We teach students how to research universities effectively, tailor responses to specific prompts, and write concisely. For competitive programs, these supplemental essays can determine acceptance—we ensure students present themselves compellingly.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Interview Preparation</h3>
                            <p>Interviews for Oxford, Cambridge, medical schools, and elite US universities are rigorous academic conversations that assess intellectual curiosity, thinking processes, and communication skills. We prepare students through mock interviews, teaching them how to articulate their thinking, engage with challenging questions, demonstrate enthusiasm for their subject, and recover from mistakes. Our tutors often have Oxbridge degrees or experience interviewing candidates and provide realistic preparation.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Scholarship & Award Applications</h3>
                            <p>Scholarship applications require different writing approaches than university admissions—emphasizing achievement, leadership, community service, and future potential. We help students craft compelling scholarship essays, prepare for scholarship interviews, and present themselves as worthy recipients. This includes prestigious scholarships like Rhodes, Marshall, Gates Cambridge, and institutional merit scholarships.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Choose Our English Tutoring?</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Native & Near-Native English Speakers</h3>
                            <p>All our English tutors are either native English speakers or have near-native proficiency with advanced qualifications (C2 level, IELTS 8+). Many hold degrees in English Literature, Linguistics, Creative Writing, or Education from universities in the UK, USA, Canada, or Australia. This ensures authentic language modeling, cultural knowledge, and deep understanding of how English works.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Passionate About Literature & Language</h3>
                            <p>Our English tutors aren't just technically proficient—they genuinely love books, language, and writing. They're avid readers who can recommend perfect books for any student, published writers who understand the craft, and enthusiastic teachers who inspire students to care about English. This passion is contagious; students catch their tutors' excitement for literature and language.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Differentiated Instruction</h3>
                            <p>Students have diverse learning profiles, strengths, and challenges in English. Some are strong readers but struggle with writing; others write fluently but have reading comprehension difficulties. Some need help with conventions; others need higher-order thinking skills. We assess each student's specific needs and adapt instruction accordingly, meeting students where they are and moving them forward systematically.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Supporting Neurodiversity</h3>
                            <p>Students with dyslexia, dysgraphia, ADHD, or autism spectrum disorders often face particular challenges with reading and writing. Our tutors are trained in evidence-based interventions: multisensory reading approaches, assistive technology, graphic organizers, explicit writing instruction, and accommodations that support success. We build on strengths while addressing challenges, helping neurodiverse students develop English competence and confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Develop Exceptional English Skills</h2>
                    <p>Book a consultation to discuss how we can support your English learning journey.</p>
                    <a href="/#contact" className={styles.ctaButton}>Find Your English Tutor</a>
                </div>
            </section>
        </>
    );
};

export default EnglishTutoring;
