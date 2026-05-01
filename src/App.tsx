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
import ContactModal from './components/ContactModal';

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
                title="NICE/inContact Supervisor Experience"
                subtitle="Contact center supervisors are the backbone of customer experience operations, yet their tools had not kept pace with the demands of the role. Through deep contextual inquiry and hands on research sessions, we built an entirely new product from the ground up that set a new standard for how supervisors work."
                heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBPMqiiaRKNUfZ-Be2Tt1kVQWcLsQE3NyeEKdt3mkfeKfwqL64rduMnhAgdzm2kfvrCrewxr_xCUwY3_RLj6uZEO9PRrG9PIbQwbtH9rVbgsYS0HlJ1nAAPpoaK9A9A1654xdnxIyOzyCuFP4MC2wzq4Y09VEnIX-vYYo_4D9fUjLWMDKSKztdQN_SO0Fzy4WHiIsCHpUf3WosT82DJHC1MXntNW-mFKlqW1uAkW2kjKDNSKBOBQDU3fbt_UXIIDLM1-r7rqDDP43lx"
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
        </Routes>
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </Router>
    </HelmetProvider>
  );
}
