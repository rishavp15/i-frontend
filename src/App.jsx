import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import CoursesSection from './components/CoursesSection';
import StatsSection from './components/StatsSection';
import ExpertsSection from './components/ExpertsSection';
import HighlightsSection from './components/HighlightsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';
import AboutPage from './components/pages/AboutPage';
import ProgramsPage from './components/pages/ProgramsPage';
import CareerPage from './components/pages/CareerPage';
import BlogPage from './components/pages/BlogPage';
import CoursesPage from './components/pages/CoursesPage';
import CourseDetailPage from './components/pages/CourseDetailPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import './App.css';

// Homepage component
function HomePage() {
  useEffect(() => {
    // Smooth scroll for internal links
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    document.addEventListener('click', handleClick);

    // Float animation on scroll
    const handleScroll = () => {
      const floatTargets = document.querySelectorAll('[data-float]');
      const y = window.scrollY;
      floatTargets.forEach((el) => {
        const speed = Number(el.dataset.float) || 0.2;
        el.style.transform = `translateY(${y * speed * -0.04}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page-shell">
      <Hero />
      <LogoStrip />
      <CoursesSection />
      <StatsSection />
      <ExpertsSection />
      <HighlightsSection />
      <FaqSection />
      <TestimonialsSection />
    </div>
  );
}

function App() {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/herosectionbackground.mp4" type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseName" element={<CourseDetailPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
