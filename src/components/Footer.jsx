import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, Clock } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                {/* Column 1: Quick Links */}
                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><Link to="/ib-tutoring-bali">IB Tutoring</Link></li>
                        <li><Link to="/international-school-tutoring-bali">International School Support</Link></li>
                        <li><Link to="/sat-prep-bali">SAT Prep</Link></li>
                        <li><Link to="/ap-tutoring-bali">AP Tutoring</Link></li>
                        <li><Link to="/igcse-tutoring-bali">IGCSE Tutoring</Link></li>
                        <li><Link to="/online-tutoring-bali">Online Tutoring</Link></li>
                        <li><Link to="/math-tutor-bali">Math Tutor</Link></li>
                        <li><Link to="/english-tutoring-bali">English Tutoring</Link></li>
                        <li><Link to="/private-tutoring-services-bali">Private Tutoring</Link></li>
                        <li><Link to="/homeschooling-support-bali">Homeschooling</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                    </ul>
                </div>

                {/* Column 2: Popular Topics */}
                <div className={styles.column}>
                    <h4>Popular Topics</h4>
                    <ul className={styles.linkList}>
                        <li><Link to="/blog/complete-guide-ib-extended-essay">IB Extended Essay Help</Link></li>
                        <li><Link to="/igcse-tutoring-bali#exam-prep">IGCSE Exam Prep</Link></li>
                        <li><Link to="/math-tutor-bali">Math Tutoring</Link></li>
                        <li><Link to="/english-tutoring-bali#esl">English Language Support</Link></li>
                        <li><Link to="/international-school-tutoring-bali#university">University Applications</Link></li>
                    </ul>
                </div>

                {/* Column 3: Tutoring Services (Affiliate Focus) */}
                <div className={styles.column}>
                    <h4>Looking for Professional Tutoring?</h4>
                    <p className={styles.affiliateDescription}>
                        <strong>Private Tutoring Bali</strong> offers expert home-based tutoring 
                        across the island for all subjects and curricula.
                    </p>
                    <a 
                        href="https://privatetutoringbali.com/" 
                        className={styles.footerCtaButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get Started Today
                    </a>
                </div>

                {/* Column 4: Resources */}
                <div className={styles.column}>
                    <h4>Resources</h4>
                    <ul className={styles.linkList}>
                        <li><Link to="/blog/time-management-tips-ib-students">Study Tips Blog</Link></li>
                        <li><Link to="/curricula-support">Curriculum Guides</Link></li>
                        <li><Link to="/sat-prep-bali#exam-info">Exam Information</Link></li>
                        <li><Link to="/blog">Educational Resources</Link></li>
                    </ul>
                    
                    <h4 style={{ marginTop: '30px' }}>Follow Us</h4>
                    <div className={styles.socials}>
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                        <a href="https://wa.me/6281234567890" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><Phone /></a>
                    </div>
                </div>
            </div>
            
            {/* Bottom Footer Bar */}
            <div className={styles.bottomBar}>
                <div className="container">
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} BaliIBTutoring.store. All rights reserved.
                    </p>
                    <p className={styles.disclaimer}>
                        Disclaimer: BaliIBTutoring.store is an information resource. We partner with Private Tutoring Bali to connect families with qualified tutors.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span className={styles.separator}>|</span>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
