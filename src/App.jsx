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
import PrimarySchoolTutoring from './pages/PrimarySchoolTutoring';
import ALevelTutoring from './pages/ALevelTutoring';
import OnlineTutoring from './pages/OnlineTutoring';
import InternationalSchoolTutoring from './pages/InternationalSchoolTutoring';
import SATPrep from './pages/SATPrep';
import APTutoring from './pages/APTutoring';
import IGCSETutoring from './pages/IGCSETutoring';
import OnlineTutoring from './pages/OnlineTutoring';
import MathTutor from './pages/MathTutor';
import EnglishTutoring from './pages/EnglishTutoring';
import PrivateTutoringServices from './pages/PrivateTutoringServices';
import HomeschoolingSupport from './pages/HomeschoolingSupport';

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
        <Route path="/primary-school-tutoring" element={<PrimarySchoolTutoring />} />
        <Route path="/a-level-tutoring" element={<ALevelTutoring />} />
        <Route path="/online-tutoring" element={<OnlineTutoring />} />
        <Route path="/contact" element={<Home />} /> {/* Just linking back to Home contact for now */}
        <Route path="/contact" element={<Home />} />
        
        {/* New Landing Pages */}
        <Route path="/ib-tutoring-bali" element={<IBTutoring />} />
        <Route path="/international-school-tutoring-bali" element={<InternationalSchoolTutoring />} />
        <Route path="/sat-prep-bali" element={<SATPrep />} />
        <Route path="/ap-tutoring-bali" element={<APTutoring />} />
        <Route path="/igcse-tutoring-bali" element={<IGCSETutoring />} />
        <Route path="/online-tutoring-bali" element={<OnlineTutoring />} />
        <Route path="/math-tutor-bali" element={<MathTutor />} />
        <Route path="/english-tutoring-bali" element={<EnglishTutoring />} />
        <Route path="/private-tutoring-services-bali" element={<PrivateTutoringServices />} />
        <Route path="/homeschooling-support-bali" element={<HomeschoolingSupport />} />
      </Routes>
    </Layout>
  );
}

export default App;
