import React from 'react';
import { Github, ExternalLink, Sparkles, Trophy, ArrowUpRight, Code2 } from 'lucide-react';
import DecorativeSparkle from './DecorativeSparkle';

export default function ProjectCard({ project }) {
  const isAwardWinning = project.badge?.includes('WINNER') || project.badge?.includes('1ST PLACE') || project.badge?.includes('RUNNER-UP');

  return (
    <div
      className="glass-panel"
      style={{
        padding: '28px 24px',
        borderRadius: 'var(--radius-card)',
        background: '#FFFFFF',
        border: `1px solid ${isAwardWinning ? 'rgba(224, 33, 138, 0.35)' : 'var(--border-pink)'}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(224, 33, 138, 0.16)';
        e.currentTarget.style.borderColor = 'var(--primary-hot-pink)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        e.currentTarget.style.borderColor = isAwardWinning ? 'rgba(224, 33, 138, 0.35)' : 'var(--border-pink)';
      }}
    >
      <div>
        {/* Category & Badge Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '14px'
          }}
        >
          <span
            className="mono-label"
            style={{
              fontSize: '10.5px',
              color: 'var(--deep-pink)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              background: 'rgba(224, 33, 138, 0.08)',
              padding: '3px 8px',
              borderRadius: '4px'
            }}
          >
            {project.category}
          </span>

          {project.badge && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '10px',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: isAwardWinning ? 'linear-gradient(135deg, #FFFBEB, #FEF3C7)' : '#FFEBF3',
                color: isAwardWinning ? '#B45309' : 'var(--primary-hot-pink)',
                border: `1px solid ${isAwardWinning ? 'rgba(245, 158, 11, 0.35)' : 'rgba(224, 33, 138, 0.25)'}`
              }}
            >
              {isAwardWinning ? <Trophy size={11} /> : <DecorativeSparkle size={10} />}
              <span>{project.badge}</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: 'var(--text-main)',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>{project.name}</span>
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '18px'
          }}
        >
          {project.description}
        </p>

        {/* Achievement / Highlight Callout */}
        {project.achievement && (
          <div
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(224, 33, 138, 0.05)',
              borderLeft: '3px solid var(--primary-hot-pink)',
              marginBottom: '18px',
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--deep-pink)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={13} style={{ color: 'var(--primary-hot-pink)', flexShrink: 0 }} />
            <span>{project.achievement}</span>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '22px'
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                color: 'var(--text-main)',
                background: '#FFF5FA',
                border: '1px solid var(--border-pink)',
                padding: '3px 8px',
                borderRadius: '6px'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Controls */}
      <div
        style={{
          borderTop: '1px solid rgba(224, 33, 138, 0.14)',
          paddingTop: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <span
          className="mono-label"
          style={{
            fontSize: '10px',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              display: 'inline-block'
            }}
          />
          {project.status || 'ACTIVE'}
        </span>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 14px',
            borderRadius: 'var(--radius-pill)',
            background: 'linear-gradient(135deg, #E0218A 0%, #C21875 100%)',
            color: '#FFFFFF',
            fontSize: '11.5px',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(224, 33, 138, 0.25)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(224, 33, 138, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(224, 33, 138, 0.25)';
          }}
        >
          <Github size={13} />
          <span>VIEW GITHUB</span>
          <ArrowUpRight size={12} />
        </a>
      </div>
    </div>
  );
}
