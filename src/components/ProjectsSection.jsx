import React from 'react';
import { SHOWCASE_PROJECTS } from '../data/projects';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="CURATED ATELIER ARCHITECTURES // FLAGSHIP WORK"
          title="Engineered For Real-World"
          highlightWord="Sovereignty &amp; Scale"
          subtitle="Autonomous pipelines, reinforcement learning models, and mission-critical agricultural and fintech platforms engineered from first principles."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {SHOWCASE_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
