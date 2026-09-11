import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Sparkles,
  Award,
  Github,
  Linkedin,
  Mail,
  Code,
  Terminal,
  Cpu,
  Brain
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socialLinks';
import SectionHeader from './SectionHeader';
import DecorativeSparkle from './DecorativeSparkle';

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <SectionHeader
          eyebrow="PROFILE // PEDIGREE &amp; ENGINEERING VISION"
          title="Architecting Impact Through"
          highlightWord="Code &amp; Silicon"
          subtitle="Third-year ENTC undergraduate at PICT Pune bridging electronics, scalable software, and applied machine learning."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}
          className="about-grid-layout"
        >
          {/* LEFT: Profile Identity Card */}
          <div
            className="glass-panel"
            style={{
              padding: '36px 28px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5FA 100%)',
              border: '1px solid rgba(224, 33, 138, 0.28)'
            }}
          >
            {/* Top Decorative Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(224, 33, 138, 0.08)',
                border: '1px solid rgba(224, 33, 138, 0.2)',
                marginBottom: '20px'
              }}
            >
              <DecorativeSparkle size={10} color="var(--primary-hot-pink)" />
              <span className="mono-label" style={{ fontSize: '10px', color: 'var(--deep-pink)' }}>
                VERIFIED IDENTITY // ATELIER 500
              </span>
            </div>

            {/* Avatar / Monogram */}
            <div
              style={{
                width: '110px',
                height: '110px',
                margin: '0 auto 20px auto',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, var(--barbie-pink) 0%, var(--primary-hot-pink) 50%, var(--deep-pink) 100%)',
                boxShadow: '0 8px 24px rgba(224, 33, 138, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {!imgError ? (
                <img
                  src={PROFILE.avatarUrl}
                  alt={PROFILE.name}
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    background: '#FFFFFF'
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFEBF3, #FFF0F6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 800,
                    color: 'var(--primary-hot-pink)'
                  }}
                >
                  {PROFILE.initials}
                </div>
              )}
            </div>

            {/* Name & Academic Title */}
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: 'var(--text-main)',
                marginBottom: '6px'
              }}
            >
              {PROFILE.name}
            </h3>

            <p
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--primary-hot-pink)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.04em',
                marginBottom: '4px'
              }}
            >
              {PROFILE.education.yearLevel}
            </p>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginBottom: '16px'
              }}
            >
              {PROFILE.education.institution}
            </p>

            {/* Core Pill */}
            <div
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-pill)',
                background: '#FFEBF3',
                border: '1px solid rgba(224, 33, 138, 0.24)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--deep-pink)',
                marginBottom: '24px',
                letterSpacing: '0.04em'
              }}
            >
              AI/ML • SOFTWARE DEVELOPMENT • DSA
            </div>

            {/* Key Metadata Stack */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                textAlign: 'left',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--border-pink)'
                }}
              >
                <GraduationCap size={18} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    ACADEMICS
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    B.Tech ENTC (CGPA: {PROFILE.education.cgpa})
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--border-pink)'
                }}
              >
                <Briefcase size={18} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    INDUSTRY R&amp;D INTERN
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    Mindstrix Technologies LLP
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid var(--border-pink)'
                }}
              >
                <MapPin size={18} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    LOCATION
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                    Pune, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Action Links */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center'
              }}
            >
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.color = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={17} />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.color = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={17} />
              </a>

              <a
                href={SOCIAL_LINKS.email.url}
                title="Email Direct"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
                  e.currentTarget.style.color = 'var(--primary-hot-pink)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-pink)';
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT: About Content & Verified Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Narrative Card 1: Academic & Focus */}
            <div
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--primary-hot-pink)'
              }}
            >
              <p style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                I’m a third-year Electronics and Telecommunication Engineering student at{' '}
                <strong style={{ color: 'var(--deep-pink)' }}>PICT, Pune</strong>, with a strong interest in{' '}
                <span className="barbie-highlight">Software Development</span>,{' '}
                <span className="barbie-highlight">AI/ML</span>, and{' '}
                <span className="barbie-highlight">Data Structures &amp; Algorithms</span>. Although my academic
                background is in <strong style={{ color: 'var(--deep-pink)' }}>ENTC</strong>, I’ve been actively exploring
                the software and AI space through <span className="barbie-highlight">projects</span>,{' '}
                <span className="barbie-highlight">hackathons</span>, <span className="barbie-highlight">research</span>,
                and hands-on learning.
              </p>
            </div>

            {/* Narrative Card 2: Practical Solutions & Tech */}
            <div
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--barbie-pink)'
              }}
            >
              <p style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                I enjoy building practical solutions that use technology to solve{' '}
                <span className="barbie-highlight">real-world problems</span>. My work has included AI-driven agricultural
                systems, <span className="barbie-highlight">Computer Vision</span>, mobile applications, and{' '}
                <span className="barbie-highlight">Cybersecurity</span>-focused projects. I’ve worked with technologies such
                as <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>C++</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Python</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Java</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>JavaScript</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Git/GitHub</code>,{' '}
                <code style={{ color: 'var(--primary-hot-pink)', background: '#FFEBF3', padding: '2px 6px', borderRadius: '4px' }}>Android</code>, and
                machine learning tools, while continuously improving my problem-solving and DSA skills.
              </p>
            </div>

            {/* Narrative Card 3: Hackathon Learning & Leadership */}
            <div
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--primary-hot-pink)'
              }}
            >
              <p style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                <span className="barbie-highlight">Hackathons</span> have been an important part of my learning journey.
                I was part of the winning team at <strong style={{ color: 'var(--deep-pink)' }}>TechFiesta 2026</strong> in
                the Agriculture domain and also secured <strong style={{ color: 'var(--deep-pink)' }}>Runner-Up</strong> at
                the <strong style={{ color: 'var(--deep-pink)' }}>Pune Agri International Hackathon</strong>, where our
                AI-powered agricultural governance solution was presented to senior government officials. These experiences
                have taught me how to work in a team, build under deadlines, take an idea from a problem statement to a
                working prototype, and improve it through testing and feedback.
              </p>
            </div>

            {/* Narrative Card 4: Philosophy & Career Vision */}
            <div
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: 'var(--radius-card)',
                borderLeft: '4px solid var(--deep-pink)'
              }}
            >
              <p style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: 1.75 }}>
                I believe the best way to learn engineering is by building, experimenting, debugging, and improving real
                systems rather than only studying theory. Currently, I’m focused on strengthening my software, AI/ML and DSA
                fundamentals, gaining industry experience through internships, and building technically strong projects that
                have <span className="barbie-highlight">real-world impact</span>. In the long term, I want to build a strong
                career in technology and continue growing as an engineer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .barbie-highlight {
          color: var(--deep-pink);
          font-weight: 700;
          background: rgba(224, 33, 138, 0.08);
          padding: 1px 6px;
          border-radius: 4px;
          border-bottom: 2px solid var(--primary-hot-pink);
        }
        @media (min-width: 900px) {
          .about-grid-layout {
            grid-template-columns: 340px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
