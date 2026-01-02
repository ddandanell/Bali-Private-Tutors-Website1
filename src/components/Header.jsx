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
            <li><Link to="/subject-tutoring" onClick={toggleMenu}>Subject Tutoring</Link></li>
            <li><Link to="/curricula-support" onClick={toggleMenu}>Curricula Support</Link></li>
            <li><Link to="/locations" onClick={toggleMenu}>Locations</Link></li>
            <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/contact" className={styles.ctaButton} onClick={toggleMenu}>Contact</Link></li>
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
