import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuickLinksGrid.module.css';
import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Award, 
  Globe, 
  Laptop, 
  Calculator, 
  Book, 
  Users, 
  Home 
} from 'lucide-react';

/**
 * Quick Links Grid Component
 * 10 clickable boxes linking to main landing pages
 */
const QuickLinksGrid = () => {
  const links = [
    {
      title: 'IB Tutoring',
      description: 'Expert IB Diploma support for all subjects',
      icon: <GraduationCap size={40} />,
      path: '/ib-tutoring-bali'
    },
    {
      title: 'International School Support',
      description: 'Tutoring for all international curricula',
      icon: <Globe size={40} />,
      path: '/international-school-tutoring-bali'
    },
    {
      title: 'SAT Prep',
      description: 'Comprehensive SAT test preparation',
      icon: <FileText size={40} />,
      path: '/sat-prep-bali'
    },
    {
      title: 'AP Tutoring',
      description: 'Advanced Placement exam support',
      icon: <Award size={40} />,
      path: '/ap-tutoring-bali'
    },
    {
      title: 'IGCSE Tutoring',
      description: 'Cambridge IGCSE exam preparation',
      icon: <BookOpen size={40} />,
      path: '/igcse-tutoring-bali'
    },
    {
      title: 'Online Tutoring',
      description: 'Flexible virtual learning options',
      icon: <Laptop size={40} />,
      path: '/online-tutoring-bali'
    },
    {
      title: 'Math Tutor',
      description: 'Expert math tutoring all levels',
      icon: <Calculator size={40} />,
      path: '/math-tutor-bali'
    },
    {
      title: 'English Tutoring',
      description: 'Language and literature support',
      icon: <Book size={40} />,
      path: '/english-tutoring-bali'
    },
    {
      title: 'Private Tutoring',
      description: 'Personalized home-based learning',
      icon: <Users size={40} />,
      path: '/private-tutoring-services-bali'
    },
    {
      title: 'Homeschooling',
      description: 'Complete homeschool support',
      icon: <Home size={40} />,
      path: '/homeschooling-support-bali'
    }
  ];

  return (
    <section className={styles.quickLinksSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Explore Tutoring Services in Bali</h2>
        <p className={styles.sectionSubtitle}>
          Find comprehensive information about all tutoring options available in Bali
        </p>
        
        <div className={styles.grid}>
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className={styles.linkCard}
            >
              <div className={styles.iconContainer}>
                {link.icon}
              </div>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksGrid;
