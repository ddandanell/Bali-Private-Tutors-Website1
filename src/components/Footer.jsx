import React from 'react';
import { Facebook, Instagram, Phone, Mail, Clock } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <h3>Bali Private Tutors</h3>
                    <p>Premier villa-based tutoring and international curriculum support for expat families in Bali.</p>
                </div>

                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                                <Phone size={18} /> +62 812 3456 7890
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@baliprivatetutors.store">
                                <Mail size={18} /> info@baliprivatetutors.store
                            </a>
                        </li>
                        <li>
                            <span className={styles.infoItem}>
                                <Clock size={18} /> Mon–Sun, 7:00 AM – 9:00 PM
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><a href="/subject-tutoring">Subject Tutoring</a></li>
                        <li><a href="/curricula-support">Curricula Support</a></li>
                        <li><a href="/locations">Locations</a></li>
                        <li><a href="/contact">Book a Consultation</a></li>
                        <li><a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer">Private Tutoring Services</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Follow Us</h4>
                    <div className={styles.socials}>
                        <a href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
                        <a href="https://wa.me/6281234567890" aria-label="WhatsApp"><Phone /></a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Bali Private Tutors. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
