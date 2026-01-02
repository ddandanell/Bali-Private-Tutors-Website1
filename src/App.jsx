import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubjectTutoring from './pages/SubjectTutoring';
import CurriculaSupport from './pages/CurriculaSupport';
import Locations from './pages/Locations';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';

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
        <Route path="/contact" element={<Home />} /> {/* Just linking back to Home contact for now */}
      </Routes>
    </Layout>
  );
}

export default App;
