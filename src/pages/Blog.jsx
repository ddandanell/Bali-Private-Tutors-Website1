import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import styles from './Home.module.css'; // Reusing Home styles
import heroImage from '../assets/hero_blog.png';

const BlogPost = ({ title, date, author, category, children }) => (
    <article style={{
        backgroundColor: 'var(--color-white)',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        marginBottom: '50px'
    }}>
        <div style={{ color: 'var(--color-turquoise)', fontSize: '0.9rem', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>{category}</div>
        <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>{title}</h3>
        <div style={{ color: '#888', marginBottom: '20px', fontSize: '0.95rem' }}>
            Published on {date} by {author}
        </div>
        <div className={styles.introText} style={{ textAlign: 'left', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {children}
        </div>
    </article>
);

const Blog = () => {
    return (
        <>
            <SEO
                title="Education in Bali Blog | Tips for Expat Families & Homeschoolers"
                description="Read our latest guides on choosing international schools in Bali, homeschooling tips, and learning Indonesian for expat kids. Expert advice for families living in Bali."
                keywords="Bali education blog, Bali international schools guide, homeschooling in Bali blog, expat study tips"
                path="/blog"
                type="blog"
            />

            <Hero
                title="The Bali Learning Log"
                subtitle="Insights, guides, and practical advice for navigating the educational landscape in Indonesia."
                image={heroImage}
                ctaText="Subscribe to Newsletter"
                ctaLink="#contact"
            />

            <section className={styles.featuresSection} style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    {/* ARTICLE 1 */}
                    <BlogPost
                        title="How to Choose an International School in Bali"
                        date="January 15, 2026"
                        author="Dr. Sarah Jenkins, Lead Consultant"
                        category="Schooling Guides"
                    >
                        <p>Moving to Bali with children is a dream for many, but the reality of choosing an education provider can be overwhelming. The island hosts over 20 international schools, varying wildly in curriculum, price, and ethos. Here is our comprehensive guide to navigating the options.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>1. Understand the Curricula</h4>
                        <p>Bali schools typically fall into three buckets: IB World Schools, Cambridge (British) Schools, and Alternative/Green Schools.
                            <br /><br />
                            <strong>The IB (International Baccalaureate)</strong> schools, such as Bali Island School in Sanur, focus on holistic, inquiry-based learning. They are excellent for students who move frequently, as the framework is globally recognized. However, they can be rigorous and writing-intensive in the Diploma years.
                            <br /><br />
                            <strong>Cambridge Schools</strong>, like Canggu Community School, offer the IGCSE and A-Level pathway. This is often preferred by British families or those who want a clear, exam-based structure that universities understand immediately.
                            <br /><br />
                            <strong>The "Green" Schools</strong> (Green School, Wood School) prioritize environmental stewardship and creativity. While fantastic for personal growth, parents should check if the academic rigor in core subjects meets their future university requirements.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>2. Hidden Costs</h4>
                        <p>Tuition is just the start. Most schools charge an annual "Capital Levy" or "Building Fee," which can be $1,000 - $3,000 USD per child. There are also enrollment fees (often non-refundable), uniform costs, and mandatory laptop purchases. Always ask for the full fee schedule including these "extras."</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>3. The "SPK" Requirement</h4>
                        <p>Under Indonesian law, international schools are classified as "SPK" (Satuan Pendidikan Kerjasama). This means they must include Bahasa Indonesia, Indonesian Civics (PPKn), and Religion classes for Indonesian passport holders. For international students, this usually means mandatory Indonesian language classes. Don't view this as a burden; it is a vital part of integration!</p>
                    </BlogPost>

                    {/* ARTICLE 2 */}
                    <BlogPost
                        title="Homeschooling While Travelling: The Ultimate Guide"
                        date="December 20, 2025"
                        author="Markus V., Homeschool Lead"
                        category="Alternative Education"
                    >
                        <p>Is it possible to travel the world and give your child a world-class education? Yes. In fact, Bali is arguably the world capital of "Worldschooling." But it requires discipline.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>Routine is King</h4>
                        <p>The biggest mistake traveling families make is treating every day like a Saturday. Children crave structure. We recommend a "4+1" schedule: 4 days of core academics (Math, English, Science) done in the morning (8 AM - 12 PM), and 1 day dedicated to field trips or "unschooling" adventures. Without a routine, math skills are the first to atrophy.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>Legal Requirements</h4>
                        <p>If you are still registered as a resident in your home country (e.g., Australia or the UK), you may still have legal obligations to report your child's progress. Ensure you understand these before you leave. Many families register with a distance education provider (like Wolsey Hall Oxford or OES) to handle the transcripts and accreditation, while hiring private tutors in Bali to help with the actual teaching.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>Socialization</h4>
                        <p>The myth that homeschoolers are antisocial is just that—a myth. In Bali, hubs like "The Garden" in Canggu or "Paradiso" in Ubud offer daily meetups for homeschooling kids. You can sign your kids up for soccer at The Joglo or swimming squads. The challenge isn't finding friends; it's finding time for schoolwork amidst all the social activities!</p>
                    </BlogPost>

                    {/* ARTICLE 3 */}
                    <BlogPost
                        title="Learning Indonesian: Why It Matters for Expat Kids"
                        date="November 10, 2025"
                        author="Putu W., Head of Languages"
                        category="Language Learning"
                    >
                        <p>Living in the "expat bubble" is easy in Bali. You can order food, hire drivers, and make friends entirely in English. But if you want your child to have a transformative experience, they need to learn Bahasa Indonesia.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>Cultural Respect</h4>
                        <p>Language is the key to culture. When a child can greet a distinct elder with "Selamat Pagi, Ibu" or ask a shopkeeper "Berapa harganya?" (How much is this?), the dynamic shifts instantly. They stop being just a tourist and become a guest. Balinese people are incredibly warm, and knowing even basic phrases opens doors to genuine friendships.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>Brain Development</h4>
                        <p>Studies show that bilingual children have better executive function, focus, and multitasking skills. Bahasa Indonesia is linguistically approachable—it uses the Roman alphabet and has no tones (unlike Mandarin) or complex tenses (unlike French). It is the perfect confidence-building second language for children.</p>

                        <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>Safety & Independence</h4>
                        <p>For teenagers especially, knowing the language adds a layer of safety. Being able to communicate with GoJek drivers, read road signs, or ask for help in an emergency gives them independence. We offer "Street Smart Indonesian" courses specifically designed for teens to navigate daily life safely.</p>
                    </BlogPost>

                </div>
            </section>

            <section id="contact" className={styles.ctaSection}>
                <div className="container">
                    <h2>Stay Updated</h2>
                    <p>Subscribe to our newsletter for the latest education news in Bali.</p>
                    <a href="#contact" className={styles.submitButton} style={{ display: 'inline-block', width: 'auto', marginTop: '20px', textDecoration: 'none' }}>Join Mailing List</a>
                </div>
            </section>
        </>
    );
};

export default Blog;
