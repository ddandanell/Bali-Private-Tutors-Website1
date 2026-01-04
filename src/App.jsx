import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubjectTutoring from './pages/SubjectTutoring';
import CurriculaSupport from './pages/CurriculaSupport';
import Locations from './pages/Locations';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import IBTutoring from './pages/IBTutoring';
import IGCSETutoring from './pages/IGCSETutoring';
import HomeschoolingSupport from './pages/HomeschoolingSupport';
import MathTutoring from './pages/MathTutoring';
import EnglishTutoring from './pages/EnglishTutoring';
import TestPreparation from './pages/TestPreparation';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject-tutoring" element={<SubjectTutoring />} />
        <Route path="/curricula-support" element={<CurriculaSupport />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ib-tutoring" element={<IBTutoring />} />
        <Route path="/igcse-tutoring" element={<IGCSETutoring />} />
        <Route path="/homeschooling-support" element={<HomeschoolingSupport />} />
        <Route path="/math-tutoring" element={<MathTutoring />} />
        <Route path="/english-tutoring" element={<EnglishTutoring />} />
        <Route path="/test-preparation" element={<TestPreparation />} />
        <Route path="/contact" element={<Home />} /> {/* Just linking back to Home contact for now */}
      </Routes>
    </Layout>
  );
}

export default App;
