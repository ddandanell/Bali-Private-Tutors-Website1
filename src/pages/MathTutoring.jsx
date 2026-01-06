import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css';
import heroImage from '../assets/hero_subjects.png';

const MathTutoring = () => {
    return (
        <>
            <SEO
                title="Math Tutors in Bali | Mathematics Tutoring for All Levels & Curricula"
                description="Expert math tutors in Bali for primary, secondary, IGCSE, IB, A-Level, and university mathematics. Specialized support for Algebra, Geometry, Calculus, Statistics. Villa-based tutoring across Bali."
                keywords="math tutor Bali, mathematics tutor Bali, calculus tutor, algebra tutor Bali, IGCSE math tutor, IB math tutor, A-level math tutor, SAT math prep Bali"
                path="/math-tutoring"
            />

            <Hero
                title="Mathematics Tutoring in Bali"
                subtitle="From foundational numeracy to advanced calculus—expert math support for students at every level."
                image={heroImage}
                ctaText="Find Your Math Tutor"
                ctaLink="#contact"
            />

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Transform Math Anxiety into Math Confidence</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.introText}>
                        Mathematics is often the subject that determines university options, career paths, and even students' self-perception as learners. Yet it's also the subject where students most frequently struggle, developing anxiety that can last a lifetime. At Bali Private Tutors, our mathematics specialists do more than teach formulas and procedures—we build genuine understanding, develop problem-solving skills, and transform students' relationships with mathematics from fear and frustration to confidence and competence.
                    </p>
                    <p>
                        Our math tutors include graduates from prestigious programs like Cambridge, Imperial College, MIT, and NUS, former teachers from top international schools, and specialists who have devoted their careers to mathematics education. They understand not just the content but the pedagogical approaches that help different types of learners grasp mathematical concepts. Whether your child is struggling with basic arithmetic, working through high school algebra, or tackling university-level calculus, we provide the personalized instruction that creates breakthroughs.
                    </p>
                    <p>
                        Living in Bali while pursuing mathematics education presents unique advantages. The relaxed, low-pressure environment allows students to work through difficult topics without the stress of crowded classrooms or comparison with peers. Our villa-based tutoring provides one-on-one attention where students can ask questions freely, work at their own pace, and receive immediate feedback. We use visual models, real-world applications drawn from Bali's environment, and technology tools to make abstract concepts concrete and accessible.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Primary & Elementary Mathematics</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px' }}>
                        The elementary years build the foundation for all future mathematics. We focus on developing number sense, conceptual understanding, and positive attitudes toward math.
                    </p>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Early Numeracy (Ages 4-7)</h3>
                            <p>Young children learn math best through concrete, hands-on experiences. Our early years math specialists use manipulatives (counters, base-ten blocks, pattern blocks), games, and real-world contexts to teach counting, number recognition, addition and subtraction, measurement, shapes, and patterns. We make math playful and engaging, building positive associations and confidence. Students learn to visualize numbers, understand part-whole relationships, and develop mental math strategies that will serve them throughout their education.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Building Number Sense (Ages 7-10)</h3>
                            <p>Middle elementary students develop fluency with operations, learn place value deeply, explore fractions and decimals, and begin problem-solving. Our tutors use the Singapore Math approach, which emphasizes the concrete-pictorial-abstract progression and systematic development of conceptual understanding. We teach efficient mental math strategies, help students understand why mathematical procedures work (not just how), and build the problem-solving skills that allow students to tackle unfamiliar challenges. Word problems become manageable as we teach students to visualize situations, identify relevant information, and select appropriate strategies.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Upper Elementary Bridge (Ages 10-12)</h3>
                            <p>Upper elementary mathematics bridges arithmetic and algebra. Students work with advanced fractions and decimals, explore ratios and proportions, study percentages, learn about integers and the number line, investigate basic geometry and measurement, and begin to think algebraically. Our tutors help students make the transition from concrete to abstract thinking, develop procedural fluency alongside conceptual understanding, and prepare for the demands of middle school mathematics. We identify and fill any gaps from earlier grades while building the skills needed for success in algebra.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Math Facts & Mental Computation</h3>
                            <p>Fluency with basic facts (addition, subtraction, multiplication, division) frees up mental energy for higher-order thinking. We use proven methods including systematic practice, games, and visualization techniques to build automaticity. For students who've struggled to memorize facts, we teach strategies and patterns that make recall easier. We also develop mental math skills that allow students to compute efficiently without paper or calculator—skills that serve them well on standardized tests and in everyday life.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Middle School Mathematics (Ages 11-14)</h2>
                    <p style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px' }}>
                        Middle school math introduces abstract thinking, algebraic reasoning, and more complex problem-solving. This is where many students begin to struggle, making expert support crucial.
                    </p>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Pre-Algebra Foundations</h3>
                            <p>Pre-Algebra introduces variables, expressions, and equations—the building blocks of algebraic thinking. Our tutors help students understand what variables represent, how to write and simplify expressions, how to solve equations systematically, and how to translate word problems into mathematical language. We emphasize understanding over memorization, helping students see the logical progression of ideas. Topics include operations with integers, fractions and decimals, ratios and proportions, percentages, basic equation solving, and introduction to functions.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Algebra I Mastery</h3>
                            <p>Algebra I is a gateway course that determines access to advanced mathematics. We provide comprehensive support covering linear equations and inequalities, graphing and slope, systems of equations, polynomials and factoring, quadratic equations, rational expressions, radical expressions, and exponential functions. Our tutors help students develop algebraic thinking—the ability to generalize, represent relationships symbolically, and solve problems systematically. We teach multiple approaches to problems, helping students build flexibility and deep understanding.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Geometry Reasoning</h3>
                            <p>Geometry develops spatial reasoning and logical thinking through the study of shapes, transformations, and proofs. Our geometry tutors help students master angles, triangles, polygons, circles, area and volume, coordinate geometry, transformations, and geometric proofs. We use dynamic geometry software, hands-on constructions, and visual reasoning to make geometry accessible. Many students who struggle with algebra excel in geometry's visual-spatial approach, and we leverage these strengths to build confidence.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Problem-Solving & Applications</h3>
                            <p>Real mathematical competence means being able to tackle unfamiliar problems, not just reproduce memorized procedures. We explicitly teach problem-solving strategies: understanding the problem, making plans, carrying out plans, and checking solutions. We use rich problems that require creative thinking, multiple steps, and mathematical reasoning. Students learn to persevere through challenging problems, try different approaches when stuck, and develop the resilience that characterizes successful mathematics students.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>High School & Advanced Mathematics</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Algebra II & Trigonometry</h3>
                            <p>Algebra II builds on Algebra I foundations, introducing more complex functions and relationships. Topics include advanced polynomials, rational functions, exponential and logarithmic functions, trigonometry, sequences and series, probability, and matrices. Our tutors help students see connections between topics, develop sophisticated algebraic manipulation skills, and prepare for calculus. Trigonometry is often particularly challenging; we use the unit circle approach, right triangle ratios, graphing, and identities to build comprehensive understanding.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Pre-Calculus Preparation</h3>
                            <p>Pre-Calculus synthesizes algebra, geometry, and trigonometry in preparation for calculus. We cover functions in depth (polynomial, rational, exponential, logarithmic, trigonometric), analytic geometry, polar coordinates, sequences and series, limits, and an introduction to derivatives. Our pre-calculus tutors focus on developing the algebraic fluency and function understanding that students need to succeed in calculus. We also teach the rigorous mathematical thinking and notation that characterizes university-level mathematics.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Calculus (AP, IB, A-Level)</h3>
                            <p>Calculus is the culmination of high school mathematics and the foundation for STEM fields. We teach both differential calculus (limits, derivatives, applications of derivatives, optimization) and integral calculus (antiderivatives, definite integrals, applications of integrals, differential equations). Our calculus tutors help students develop both computational skills and conceptual understanding. For AP Calculus (AB or BC), IB Math Analysis and Approaches HL, or A-Level Further Math, we ensure students master the content and exam techniques needed for top scores.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Statistics & Probability</h3>
                            <p>Statistics has become increasingly important for university and career success. We teach descriptive statistics, probability theory, probability distributions (binomial, normal), statistical inference (hypothesis testing, confidence intervals), regression and correlation, and experimental design. For students taking AP Statistics, IB Math Applications and Interpretation, or A-Level Statistics, we provide comprehensive exam preparation. We emphasize statistical thinking—the ability to design studies, analyze data, and draw appropriate conclusions.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>IB Mathematics (AA & AI)</h3>
                            <p>The IB Diploma offers two mathematics courses: Analysis and Approaches (AA) for students interested in theoretical mathematics, and Applications and Interpretation (AI) for those preferring practical applications. We provide specialized tutoring for both courses at Standard Level and Higher Level, covering all syllabus topics, teaching the use of GDC calculators required by IB, preparing for the Internal Assessment (Mathematical Exploration), and conducting comprehensive exam preparation with past papers and mark schemes. Our IB Math tutors understand exactly what IB examiners want and how to maximize marks.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Cambridge IGCSE & A-Level Math</h3>
                            <p>For IGCSE Mathematics (Core and Extended), Additional Mathematics, A-Level Mathematics, and Further Mathematics, we provide expert Cambridge-aligned tutoring. Our tutors are intimately familiar with Cambridge specifications, question styles, and mark schemes. We teach all required topics, develop problem-solving skills specific to Cambridge exams, practice extensively with past papers, and teach exam technique that maximizes marks. Many of our tutors have taught in Cambridge international schools or served as Cambridge examiners.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Math Success Stories</h2>
                    <div className={styles.testimonialGrid}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"My son had always struggled with math and developed severe math anxiety. He was convinced he was 'just bad at math.' His tutor in Bali changed everything. She was patient, encouraging, and had a gift for explaining concepts in multiple ways until one clicked. She used visual models, real-world examples, and never made him feel stupid. After six months of regular tutoring, his math grade improved by two levels, but more importantly, he stopped saying he was bad at math. He actually started to enjoy it."</p>
                                <p><strong>- Jennifer L., Parent in Canggu</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"I needed a 7 in IB Math AA HL for my engineering program at Imperial College. I was predicted a 5 and panicking. My tutor provided intensive preparation in my final term—we worked through every past paper, analyzed mark schemes, and identified my weak areas. He taught me calculator tricks, time management strategies, and how to check my work efficiently. I achieved my 7, got into Imperial, and the problem-solving skills I developed have been invaluable in my degree."</p>
                                <p><strong>- Alex M., Former IB Student, Now at Imperial College London</strong></p>
                            </div>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p className={styles.quote}>"Homeschooling high school math was beyond me. I was comfortable teaching up to Algebra I, but when my daughter needed Geometry and then Algebra II, I was lost. Her math tutor became her teacher for math, meeting with her three times a week. She explained everything clearly, checked homework, and gave tests. My daughter not only learned the content but developed the independence and work habits she needed. She's now studying data science at university."</p>
                                <p><strong>- Katherine P., Homeschooling Parent in Ubud</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Standardized Test Math Preparation</h2>
                    <div className={styles.divider}></div>
                    <p>
                        Mathematics is a critical component of most standardized tests for university entrance. We provide specialized preparation for:
                    </p>
                    <ul style={{ maxWidth: '900px', margin: '20px auto', lineHeight: '1.8' }}>
                        <li><strong>SAT Math:</strong> Covering algebra, problem-solving, data analysis, advanced math (including some trigonometry and pre-calculus concepts), and the specific question formats of the SAT. We teach both calculator and no-calculator strategies, time management, and how to avoid common traps in SAT questions.</li>
                        <li><strong>ACT Math:</strong> Broader in scope than SAT, including more geometry and trigonometry. We ensure students know all required concepts, teach the pacing needed to complete 60 questions in 60 minutes, and practice with authentic ACT materials.</li>
                        <li><strong>SAT Subject Test Math (Level 1 & 2):</strong> For students applying to competitive programs. Level 1 covers algebra and geometry; Level 2 includes pre-calculus and basic calculus. We provide comprehensive content review and extensive practice.</li>
                        <li><strong>GRE Quantitative:</strong> For students applying to graduate programs. We review fundamental math concepts, teach the specific question types (quantitative comparison, multiple choice, numeric entry), and develop the logical reasoning skills the GRE emphasizes.</li>
                        <li><strong>GMAT Quantitative:</strong> For MBA applicants. Focus on problem-solving and data sufficiency questions that test mathematical reasoning more than computational skill.</li>
                    </ul>
                    <p style={{ marginTop: '20px' }}>
                        Our test prep goes beyond content review—we teach test-taking strategies, time management, calculator use, question interpretation, and how to avoid mistakes under pressure. We use official practice materials and conduct full-length practice tests to build stamina and confidence.
                    </p>
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Mathematics Teaching Approach</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <h3>Conceptual Understanding First</h3>
                            <p>We believe that procedural fluency should grow from conceptual understanding, not rote memorization. Students who understand why procedures work can adapt to new situations, remember methods longer, and develop genuine mathematical reasoning. We use multiple representations (concrete, visual, symbolic, verbal) to build deep understanding of mathematical ideas. This approach takes more time initially but creates lasting mathematical competence.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Diagnostic Assessment</h3>
                            <p>We begin every new tutoring relationship with diagnostic assessment to identify precisely what students know and where gaps exist. Often, current struggles stem from missing prerequisite knowledge—a student struggling with algebra may actually need remediation in fraction operations; difficulty with calculus might reflect weak algebraic skills. We identify and fill these gaps systematically rather than just addressing surface-level symptoms.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Technology Integration</h3>
                            <p>We leverage technology thoughtfully to enhance learning. Graphing calculators, Desmos, GeoGebra, and other tools help visualize abstract concepts, explore relationships dynamically, and solve complex problems efficiently. For IB students, we ensure mastery of required GDC (graphing display calculator) functions. We also teach appropriate calculator use—when calculators enhance understanding versus when they short-circuit it.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <h3>Growth Mindset Development</h3>
                            <p>Mathematical competence is not fixed—it grows through effort, strategy use, and persistence. We explicitly teach growth mindset, helping students understand that struggle is part of learning, mistakes provide learning opportunities, and abilities can be developed. We praise effort, strategy use, and improvement rather than just correct answers. Many students who believed they were "bad at math" discover they simply hadn't yet learned effective approaches or built necessary foundations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Transform Your Math Journey</h2>
                    <p>Book a free consultation to discuss your math learning goals and find the perfect tutor.</p>
                    <a href="/#contact" className={styles.ctaButton}>Find Your Math Tutor</a>
                </div>
            </section>
        </>
    );
};

export default MathTutoring;
