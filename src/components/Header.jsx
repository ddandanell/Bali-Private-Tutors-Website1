import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">
            {/* Placeholder for Logo, using text for now */}
            <span className={styles.logoText}>Bali Private Tutors</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/ib-tutoring-bali" onClick={toggleMenu}>IB Tutoring</Link></li>
            <li><Link to="/international-school-tutoring-bali" onClick={toggleMenu}>International School Support</Link></li>
            <li><Link to="/sat-prep-bali" onClick={toggleMenu}>SAT Prep</Link></li>
            <li><Link to="/ap-tutoring-bali" onClick={toggleMenu}>AP Tutoring</Link></li>
            <li><Link to="/igcse-tutoring-bali" onClick={toggleMenu}>IGCSE Tutoring</Link></li>
            <li className={styles.dropdown}>
              <button className={styles.dropdownToggle}>Subjects</button>
              <ul className={styles.dropdownMenu}>
                <li><Link to="/math-tutor-bali" onClick={toggleMenu}>Math</Link></li>
                <li><Link to="/english-tutoring-bali" onClick={toggleMenu}>English</Link></li>
                <li><Link to="/subject-tutoring#sciences" onClick={toggleMenu}>Sciences</Link></li>
                <li><Link to="/subject-tutoring#languages" onClick={toggleMenu}>Languages</Link></li>
              </ul>
            </li>
            <li><Link to="/online-tutoring-bali" onClick={toggleMenu}>Online Tutoring</Link></li>
            <li><Link to="/homeschooling-support-bali" onClick={toggleMenu}>Homeschooling</Link></li>
            <li>
              <a 
                href="https://privatetutoringbali.com/" 
                className={styles.ctaButton} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Find a Tutor
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons (Desktop) */}
        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Phone size={20} /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
