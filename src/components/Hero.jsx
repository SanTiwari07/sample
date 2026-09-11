import React from 'react';
import {
  Sparkles,
  Linkedin,
  Trophy,
  Mail,
  Github,
  ArrowRight,
  Code2,
  Cpu,
  GraduationCap,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socialLinks';
import ActionButton from './ActionButton';
import DecorativeSparkle from './DecorativeSparkle';

export default function Hero() {
  return (
    <header
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Aura */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.22) 0%, rgba(224, 33, 138, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '5%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 167, 255, 0.25) 0%, rgba(255, 194, 221, 0.12) 60%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 56px)',
            borderRadius: 'var(--radius-card)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 245, 250, 0.92) 100%)',
            border: '1px solid rgba(224, 33, 138, 0.3)',
            boxShadow: '0 20px 50px rgba(224, 33, 138, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Corner Accents */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span
              className="mono-label"
              style={{
                fontSize: '10px',
                color: 'var(--deep-pink)',
                background: 'rgba(224, 33, 138, 0.08)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(224, 33, 138, 0.2)'
              }}
            >
              SYS.STATUS: ONLINE // VERIFIED
            </span>
            <DecorativeSparkle size={18} color="var(--primary-hot-pink)" />
          </div>

          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(90deg, #FFEBF3, #FFF0F6)',
              border: '1px solid rgba(224, 33, 138, 0.25)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '24px'
            }}
          >
            <DecorativeSparkle size={12} color="var(--primary-hot-pink)" />
            <span
              className="mono-label"
              style={{
                color: 'var(--deep-pink)',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.12em'
              }}
            >
              {PROFILE.eyebrow}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: 'clamp(38px, 6.5vw, 68px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              color: 'var(--text-main)'
            }}
          >
            Hi, I&apos;m{' '}
            <span
              style={{
                color: 'var(--primary-hot-pink)',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Shambhavi.
              <span
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--primary-hot-pink), var(--barbie-pink), transparent)',
                  borderRadius: '2px',
                  opacity: 0.6
                }}
              />
            </span>
          </h1>

          {/* Supporting Headline */}
          <div
            className="mono-label"
            style={{
              fontSize: 'clamp(12px, 1.8vw, 15px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--deep-pink)',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <span>AI/ML</span>
            <span style={{ color: 'var(--soft-pink)' }}>•</span>
            <span>SOFTWARE DEVELOPMENT</span>
            <span style={{ color: 'var(--soft-pink)' }}>•</span>
            <span>DATA STRUCTURES &amp; ALGORITHMS</span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(17px, 2.2vw, 21px)',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              marginBottom: '28px',
              fontWeight: 500,
              lineHeight: 1.5
            }}
          >
            {PROFILE.heroDescription}
          </p>

          {/* Subtle Metadata Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '36px'
            }}
          >
            <div className="barbie-badge">
              <GraduationCap size={13} strokeWidth={2.2} />
              <span>PICT • ENTC (CGPA 8.6)</span>
            </div>
            <div className="barbie-badge">
              <Code2 size={13} strokeWidth={2.2} />
              <span>SOFTWARE + AI/ML</span>
            </div>
            <div className="barbie-badge">
              <MapPin size={13} strokeWidth={2.2} />
              <span>PUNE, INDIA</span>
            </div>
            <div className="barbie-badge" style={{ background: '#FFF0F8', borderColor: 'var(--barbie-pink)' }}>
              <Trophy size={13} strokeWidth={2.2} style={{ color: 'var(--primary-hot-pink)' }} />
              <span>TECHFIESTA CHAMPION &bull; ₹15L GRANT</span>
            </div>
          </div>

          {/* Real Interactive Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center'
            }}
          >
            <ActionButton
              href="#projects"
              variant="primary"
              icon={Sparkles}
            >
              EXPLORE PROJECTS
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.linkedin.url}
              variant="secondary"
              icon={Linkedin}
            >
              CONNECT LINKEDIN
            </ActionButton>

            <ActionButton
              href="#wins"
              variant="secondary"
              icon={Trophy}
            >
              HACKATHON WINS
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.email.url}
              variant="secondary"
              icon={Mail}
            >
              SEND EMAIL
            </ActionButton>

            <ActionButton
              href={SOCIAL_LINKS.repositories.url}
              variant="outline"
              icon={Github}
            >
              ALL REPOSITORIES
            </ActionButton>
          </div>
        </div>
      </div>
    </header>
  );
}
