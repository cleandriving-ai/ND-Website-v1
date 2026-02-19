
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CityPage from './pages/CityPage';
import AIDiagnosticAssistant from './components/AIDiagnosticAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServicePage />} />
            <Route path="/location/:city" element={<CityPage />} />
            <Route path="/contact" element={<Home section="contact" />} />
          </Routes>
        </main>
        <AIDiagnosticAssistant />
        <Footer />
      </div>
    </Router>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
