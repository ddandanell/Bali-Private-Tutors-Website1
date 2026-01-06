import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css';
import heroImage from '../assets/hero.png';

const PrimarySchoolTutoring = () => {
    return (
        <>
            <SEO
                title="Primary School Tutoring in Bali | Elementary Education Support Ages 5-11"
                description="Expert primary school tutors in Bali for reading, writing, mathematics, and all elementary subjects. Personalized learning support for young children aged 5-11 in Ubud, Canggu, Seminyak. Foundation skills development."
                keywords="primary school tutor Bali, elementary tutor Bali, early years education Bali, reading tutor young children, math tutor primary, KS1 KS2 tutor Bali, grade 1-5 tutor"
                path="/primary-school-tutoring"
            />

            <Hero
                title="Primary School Tutoring in Bali"
                subtitle="Building strong foundations in literacy, numeracy, and learning skills for children aged 5-11."
                image={heroImage}
                ctaText="Find Primary Tutor"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Nurturing Young Learners in Paradise</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        The primary school years (ages 5-11, typically grades K-5 or UK Key Stages 1-2) are the most critical period for educational development. During these formative years, children build the foundational skills in reading, writing, and mathematics that will support all future learning. They also develop their attitudes toward learning, school, and themselves as learners—attitudes that can last a lifetime. At Bali Private Tutors, our primary school specialists understand child development, know how young children learn best, and create engaging, nurturing learning environments where every child can flourish.
                    </p>
                    <p>
                        Many expat families in Bali face unique challenges with primary education. Some are homeschooling their young children and need expert guidance and support. Others have children in local or international schools but want supplementary instruction to ensure strong foundations. Some families are visiting Bali for extended periods and need temporary educational support to prevent learning loss. Still others have children with learning differences or specific academic challenges that require specialized intervention. Whatever your situation, we provide the high-quality primary education support your child needs.
                    </p>
                    <p>
                        Our primary tutors are not just academically qualified—they genuinely love working with young children. They bring patience, creativity, enthusiasm, and deep understanding of how to make learning joyful and meaningful for children. Whether teaching a 5-year-old to read their first words, helping an 8-year-old master multiplication tables, or supporting a 10-year-old to write their first proper essay, our tutors make learning feel like an adventure, not a chore. We believe that children who love learning in primary school become confident, capable students who thrive throughout their education.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Early Primary Years (Ages 5-7 / Grades K-2)</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Reading & Phonics Foundation</h3>
                            <p>Learning to read is the most important academic skill young children acquire. We use systematic, evidence-based phonics instruction (synthetic phonics) to teach letter-sound relationships, blending, and decoding. Children learn to recognize sight words, develop fluency through repeated reading of engaging texts, and build comprehension through discussion of stories. For children struggling with reading, we provide intensive intervention using multisensory approaches that engage visual, auditory, and kinesthetic pathways. We make reading fun through games, songs, and high-quality children's literature, building both skill and love of reading. By the end of this period, children should be transitioning from "learning to read" to "reading to learn."</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Early Writing Skills</h3>
                            <p>Writing development begins with fine motor skills (pencil grip, letter formation) and progresses to composing sentences and short texts. We teach proper letter formation through multisensory methods, develop phonemic awareness and spelling skills, teach basic punctuation (capital letters, periods, question marks), help children compose sentences orally before writing them, and introduce simple narrative writing (personal experiences, simple stories). Young children often have wonderful ideas but struggle to translate them into writing. We provide the scaffolding—such as drawing pictures first, oral composition, sentence frames—that helps their ideas reach the page. We celebrate their efforts enthusiastically, building confidence and motivation to write.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Number Sense & Early Math</h3>
                            <p>Mathematical thinking begins with understanding quantity, numbers, and relationships between numbers. We build strong number sense through concrete materials (counters, base-ten blocks, number lines), games, and real-world contexts. Children learn counting, number recognition, comparing quantities, addition and subtraction concepts and facts, understanding place value, simple problem-solving, and basic measurement and geometry. We use play-based approaches that make math engaging—cooking to practice measurement, board games to practice counting, building with blocks to explore shapes and spatial relationships. Strong foundations in early mathematics prevent struggles later and help children see math as sensible and accessible rather than arbitrary and mysterious.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Social & Emotional Learning</h3>
                            <p>Academic learning happens best when children feel safe, confident, and motivated. We explicitly teach self-regulation skills (sitting still, focusing, following directions, managing frustration), social skills (sharing materials, taking turns, listening to others), growth mindset ("I can learn anything with effort and practice"), and executive function skills (planning, organizing, checking work). We help children develop positive attitudes toward learning and themselves as learners. For children who've experienced school anxiety or struggle with attention and behavior, we create supportive, patient, one-on-one environments where they can succeed and rebuild confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Middle Primary Years (Ages 7-9 / Grades 2-4)</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Reading Comprehension & Analysis</h3>
                            <p>By this stage, most children can decode text fluently and are ready to focus on comprehension—understanding, analyzing, and responding to what they read. We teach active reading strategies: making predictions, asking questions, making connections (text-to-self, text-to-text, text-to-world), visualizing, determining importance, inferring, and synthesizing. Children learn to identify main ideas and supporting details, understand story elements (character, setting, plot, theme), compare and contrast, identify cause and effect, and understand author's purpose. We use a wide range of texts—fiction and non-fiction, poetry and prose, texts from diverse cultures—to develop both reading skill and knowledge of the world. We also encourage independent reading for pleasure, helping children find books they love and establishing lifelong reading habits.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Writing Development</h3>
                            <p>Writing becomes more sophisticated in middle primary years. Children learn the writing process (planning, drafting, revising, editing, publishing), write across multiple genres (narrative stories, informational reports, opinion pieces, poetry), develop paragraph structure (topic sentences, supporting details, conclusions), use more complex sentences with conjunctions and varied structures, expand vocabulary and use descriptive language, and improve spelling and conventions. We provide extensive feedback on writing while maintaining children's motivation and confidence. Writing conferences—where tutor and student discuss the writing together—help children see themselves as real authors with something important to say. We celebrate progress and help children take pride in their published pieces.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Mathematics Fluency</h3>
                            <p>Middle primary mathematics builds on early foundations, developing fluency with multi-digit arithmetic, fractions and decimals, and mathematical problem-solving. Children learn multiplication and division concepts and facts, multi-digit addition and subtraction with regrouping, introduction to fractions (concepts, comparing, simple operations), basic geometry (shapes, perimeter, area), measurement (time, money, length, mass, capacity), and data handling (collecting, organizing, interpreting data). We use the Singapore Math approach, which emphasizes the CPA progression (Concrete-Pictorial-Abstract), bar modeling for problem-solving, and deep conceptual understanding rather than just procedural fluency. Children learn to see mathematics as logical and connected, not arbitrary rules to memorize.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Science & Social Studies Foundations</h3>
                            <p>Primary children are naturally curious about the world. We nurture this curiosity through engaging instruction in science and social studies. In science, children learn scientific inquiry skills (observing, questioning, predicting, experimenting, drawing conclusions), explore life science (plants, animals, habitats, life cycles), physical science (matter, energy, forces, simple machines), and earth science (weather, seasons, rocks, water cycle). In social studies, children learn about communities, cultures, geography, basic history, and citizenship. Living in Bali provides amazing opportunities for authentic learning—observing tropical ecosystems, learning about Balinese culture and traditions, exploring rice terrace agriculture, studying volcanology. We leverage these real-world contexts to make learning meaningful and memorable.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Upper Primary Years (Ages 9-11 / Grades 4-6)</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Advanced Literacy Skills</h3>
                            <p>Upper primary students develop more sophisticated reading and writing skills in preparation for secondary school. They analyze complex texts including novels, non-fiction books, and multi-paragraph articles. They learn literary analysis skills (identifying themes, analyzing character development, understanding symbolism and figurative language, comparing multiple texts). Writing becomes more formal and academic—children write research reports, persuasive essays, literary analyses, and creative pieces of greater length and complexity. We teach proper citation of sources, note-taking strategies, how to organize information from multiple sources, and how to revise and edit work to higher standards. Grammar instruction becomes more explicit, teaching parts of speech, sentence types, and punctuation rules that enable clear, sophisticated writing.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Pre-Algebra Mathematics</h3>
                            <p>Upper primary mathematics bridges arithmetic and algebra, preparing students for the abstract thinking required in secondary mathematics. Students master operations with fractions, decimals, and percentages, learn ratios and proportions, work with integers and the number line, explore basic concepts of variables and expressions, solve multi-step word problems, learn about probability and statistics, and study more advanced geometry (angles, triangles, circles, surface area, volume). We ensure students understand why procedures work, not just how to execute them. This conceptual understanding, combined with procedural fluency, prepares students to succeed in algebra and higher mathematics. We also address any remaining gaps from earlier grades that might impede progress.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Study Skills & Learning Strategies</h3>
                            <p>Upper primary is the ideal time to explicitly teach the study skills and learning strategies that lead to independent, successful learning. We teach time management (using planners, breaking projects into steps, avoiding procrastination), organization (organizing materials, maintaining binders and folders, keeping track of assignments), note-taking (identifying main ideas, summarizing, creating useful review notes), test preparation (reviewing systematically, practicing retrieval, managing test anxiety), and metacognition (thinking about their own thinking, identifying what they know and don't know, choosing appropriate strategies). These skills serve students throughout their academic careers and into professional life. Students who master study skills in primary school approach secondary school with confidence and competence.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Critical Thinking & Problem-Solving</h3>
                            <p>Beyond specific subject content, we develop general thinking skills that apply across disciplines. Children learn to analyze information critically (identifying bias, evaluating sources, distinguishing fact from opinion), solve complex problems (breaking problems into parts, trying multiple strategies, persisting through difficulty), think creatively (generating multiple ideas, making unusual connections, designing original solutions), and communicate reasoning clearly (explaining thinking processes, justifying conclusions, discussing ideas). We use rich, open-ended problems and inquiry-based learning that requires genuine thinking rather than just recall of information. Bali's multicultural environment provides excellent opportunities for perspective-taking and understanding multiple viewpoints—essential components of critical thinking.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Primary School Success Stories</h2>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"Our 6-year-old daughter was struggling to learn to read. Her school used a whole language approach, but she wasn't making progress. Her tutor used systematic phonics instruction with multisensory techniques—tracing letters in sand, using magnetic letters, playing word-building games. Within three months, she went from barely reading to reading simple chapter books independently. More importantly, she went from hating reading to loving it. She now carries books everywhere and reads to her younger brother every night."</p>
                                <p><strong>- Patricia M., Parent in Ubud</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"We were homeschooling our 8-year-old while living in Bali for six months. I was confident teaching reading and social studies but felt out of my depth with math. His tutor came three mornings a week and taught Singapore Math. She used manipulatives and visual models that made concepts clear. My son developed real mathematical understanding—he could explain why procedures work, not just follow steps. When we returned home and he re-entered traditional school, he was actually ahead of his peers in math."</p>
                                <p><strong>- Michael and Laura T., Homeschool Parents</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"Our son has ADHD and was struggling in his large classroom. He was falling behind academically and losing confidence. Weekly tutoring sessions provided the one-on-one attention he needed. His tutor used lots of movement and hands-on learning, took frequent breaks, and gave him strategies for focusing and organizing. Within a term, he caught up to grade level and his behavior at school improved dramatically. The individualized approach was exactly what he needed."</p>
                                <p><strong>- Jennifer K., Parent in Canggu</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Supporting Different Learning Needs</h2>
                    <div className={styles.divider}></div>
                    <p>
                        Every child learns differently. Some are visual learners who need to see information; others are auditory learners who learn best through listening and discussion; still others are kinesthetic learners who need movement and hands-on activities. Some children learn quickly and need challenge and acceleration; others need more time and repetition. Some have specific learning differences like dyslexia, dysgraphia, or dyscalculia that require specialized approaches.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        Our primary tutors are skilled at differentiating instruction—adapting teaching to meet each child's unique learning profile. We begin with informal assessment to understand how a child learns best, what motivates them, where their strengths lie, and where they need support. Then we design instruction that plays to their strengths while systematically addressing areas of need. For gifted learners, we provide challenge through depth and complexity rather than just acceleration. For struggling learners, we break skills into small steps, provide extensive scaffolding, and celebrate incremental progress.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        For children with diagnosed learning differences, we implement research-based interventions. For dyslexia, we use Orton-Gillingham multisensory reading approaches. For dysgraphia, we teach keyboarding alongside handwriting and allow alternative recording methods. For dyscalculia, we use concrete materials extensively and teach number sense explicitly. For ADHD, we incorporate movement, use timers and checklists, break tasks into manageable chunks, and teach self-monitoring strategies. The one-on-one nature of tutoring is particularly powerful for children with learning differences, providing the individualized attention and tailored instruction they need to succeed.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Choose Our Primary Tutoring?</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Child Development Expertise</h3>
                            <p>Teaching young children requires deep understanding of child development—how children's brains grow, how they process information, what they're capable of at different ages, and how to meet developmental needs while building academic skills. Our primary tutors have training in early childhood education, child psychology, and developmentally appropriate practice. They know how to make learning engaging and accessible for young learners, recognizing that what works for teenagers or adults doesn't work for 6-year-olds. They're patient, nurturing, and enthusiastic—qualities essential for working successfully with young children.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Play-Based & Hands-On Learning</h3>
                            <p>Young children learn best through active, hands-on experiences, not passive listening or worksheet completion. Our tutors use manipulatives, games, art, music, movement, and real-world activities to teach academic content. Math might involve cooking, building with blocks, playing board games, or shopping at the market. Reading might include acting out stories, creating story maps with drawings, or writing and illustrating books. Science might involve collecting leaves, growing plants, or conducting simple experiments. This playful, experiential approach makes learning joyful and memorable while building genuine understanding.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Positive Reinforcement & Confidence Building</h3>
                            <p>Primary years are when children form their self-concepts as learners. A child who experiences success and encouragement in primary school develops confidence and persistence that serves them throughout life. A child who experiences repeated failure or discouragement may develop learned helplessness and give up easily. Our tutors are skilled at providing appropriate challenge—tasks that are difficult enough to require effort but achievable with support (what Vygotsky called the "zone of proximal development"). They celebrate effort and progress, not just correct answers. They help children see mistakes as learning opportunities, not failures. They build intrinsic motivation—helping children find joy in learning itself, not just external rewards.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Partnership with Parents</h3>
                            <p>For young children, parents are the most important educators. Effective primary tutoring involves partnership with parents—sharing what we're teaching, suggesting home activities that reinforce learning, communicating about progress and concerns, and helping parents support their children's education. We provide guidance on how to read with children, practice math facts, encourage writing, and develop study routines at home. We want tutoring sessions to be part of a comprehensive support system that includes parents, teachers (if children are in school), and the broader learning environment. Education is most effective when home and tutoring work together.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Build Strong Foundations</h2>
                    <p>Book a consultation to discuss how we can support your child's primary education.</p>
                    <a href="/#contact" className={styles.ctaButton}>Find Primary Tutor</a>
                </div>
            </section>
        </>
    );
};

export default PrimarySchoolTutoring;
