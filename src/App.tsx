/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import CaseStudyTemplate from './pages/CaseStudyTemplate';
import CCPulseCaseStudy from './pages/CCPulseCaseStudy';
import NiceDashboardPortfolio from './pages/NiceDashboardPortfolio';
import ImpartnerPortfolio from './pages/ImpartnerPortfolio';
import MaxPortfolio from './pages/MaxPortfolio';
import SerenovaPortfolio from './pages/SerenovaPortfolio';
import ContactModal from './components/ContactModal';
import niceHero from './assets/NICE_SUP_AGENTS.png';
import laptopSkills from './assets/Laptop-Skills-1.png';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home onContactClick={handleContactClick} />} />
          <Route 
            path="/case-study/nice-incontact" 
            element={
              <CaseStudyTemplate 
                onContactClick={handleContactClick}
                title="NICE SUPERVISOR Experience"
                subtitle="Contact center supervisors are the backbone of customer experience operations, yet their tools had not kept pace with the demands of the role. Through deep contextual inquiry and hands on research sessions, we built an entirely new product from the ground up that set a new standard for how supervisors work."
                heroImage={niceHero}
                solutionImage={laptopSkills}
                company="NICE/inContact"
                task="Dashboard Redesign"
                role="Lead UX Designer"
                timeline="6 Months"
              />
            } 
          />
          <Route 
            path="/case-study/cc-pulse" 
            element={
              <CCPulseCaseStudy 
                onContactClick={handleContactClick}
                title="CC Pulse: Content Control Redefined"
                subtitle="A deep-dive into the UX transformation of the CC Pulse dashboard for real-time monitoring and high-stakes content moderation."
                heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDO3cf4mu76dSUTfsjETUGzk9jLwWuWaSjezokMH4L4hnvdzGqhJbEEaInpzDzBe7JMbmb4kOW52lCMAxaozCvImdC6bSI3EfXnu0vv_TIwuOEJeL5vqcvszxnxHZHn82TNVZzwfp51X1mb5bG3pWkQGZZbTg4CozHcYa6IDzTexsmfXL0DErVogQKa7onOktNKFsVRMgzP1X7P775zfBYBaaiFxh1SonQjemEOaB4ydVX_5S-DxQGmLJA7dHvLQs-k_C0llhY0tpaa"
                company="CC Pulse"
                task="UX Transformation"
                role="Lead UX Designer"
                timeline="8 Months"
              />
            } 
          />
          <Route 
            path="/case-study/placeholder" 
            element={<CaseStudyTemplate onContactClick={handleContactClick} />} 
          />
          <Route 
            path="/portfolio/nice-dashboard" 
            element={<NiceDashboardPortfolio onContactClick={handleContactClick} />} 
          />
          <Route 
            path="/portfolio/impartner-preview" 
            element={<ImpartnerPortfolio onContactClick={handleContactClick} />} 
          />
          <Route 
            path="/portfolio/max" 
            element={<MaxPortfolio onContactClick={handleContactClick} />} 
          />
          <Route 
            path="/portfolio/serenova-supervisor" 
            element={<SerenovaPortfolio onContactClick={handleContactClick} />} 
          />
        </Routes>
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </Router>
    </HelmetProvider>
  );
}
