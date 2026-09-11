import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import RepositoriesSection from './components/RepositoriesSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Subtle Engineering Grid Overlay */}
      <div className="editorial-grid-overlay" aria-hidden="true" />

      {/* Sticky Haute Couture Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <AboutSection />
        <AchievementsSection />
        <ProjectsSection />
        <RepositoriesSection />
        <SkillsSection />
        <ExperienceSection />
        <StatsSection />
      </main>

      {/* Barbiecore Luxury Footer */}
      <Footer />
    </div>
  );
}
