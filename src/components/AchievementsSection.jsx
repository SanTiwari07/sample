import React from 'react';
import { ACHIEVEMENTS } from '../data/achievements';
import SectionHeader from './SectionHeader';
import AchievementCard from './AchievementCard';

export default function AchievementsSection() {
  return (
    <section id="wins" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="THE WINS // ACCREDITED ACHIEVEMENTS"
          title="National Hackathon Honors &amp;"
          highlightWord="Government Accreditations"
          subtitle="Proven track record in high-stakes competitive hackathons, transforming problem statements into deployed prototypes under strict deadlines."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
