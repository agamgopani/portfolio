import React, { useState } from 'react';
import { resumeData } from '../data/resume';
import { Globe, Mail, ArrowRight, Copy, Check, Terminal, LayoutTemplate, Code, ArrowUpRight, MapPin } from 'lucide-react';

const BentoGrid = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section bento-section">
      <div className="container">
        <div className="bento-grid">

          {/* Time Zones Block (Left Tall) */}
          <div className="bento-item timezone-block">
            <div className="bento-content">
              <h3 className="bento-title">I'm very flexible with time zone <span className="highlight-blue">communications</span></h3>

              <div className="timezone-flags">
                <div className="flag-item"><span className="flag">🇬🇧</span> UK</div>
                <div className="flag-item"><span className="flag">🇮🇳</span> India</div>
                <div className="flag-item"><span className="flag">🇺🇸</span> USA</div>
                <div className="flag-item"><span className="flag">🇨🇦</span> Canada</div>
              </div>

              <div className="globe-visual">
                <div className="globe-sphere"></div>
              </div>

              <div className="timezone-footer">
                <div className="location-indicator">
                  <MapPin size={14} />
                  <div>
                    <span className="loc-label">REMOTE</span>
                    <span className="loc-value">India</span>
                  </div>
                </div>
                <a href="#contact" className="connect-link">
                  Connect now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Collaboration Block (Center Top) */}
          <div className="bento-item collaboration-block">
            <div className="bento-content centered">
              <h3 className="bento-title glow-text">Let's work together on your next project</h3>

              <div className="email-copy-btn" onClick={copyEmail}>
                <Copy size={16} />
                <span>{resumeData.personal.email}</span>
                {copied && <span className="copied-tooltip">Copied!</span>}
              </div>
            </div>
          </div>

          {/* Impact/Tech Block (Right Tall) */}
          <div className="bento-item impact-block">
            <div className="bento-content">
              <div className="tech-pills">
                <span className="pill"><Terminal size={12} /> Bash</span>
                <span className="pill"><Code size={12} /> React</span>
                <span className="pill"><Globe size={12} /> Biome.js</span>
              </div>

              <div className="impact-visual">
                <div className="code-window">
                  <div className="window-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="window-body">
                    <div className="code-line">Websites that</div>
                    <div className="code-line highlight">Impact.</div>
                    <div className="window-actions">
                      <button className="win-btn primary">Start <ArrowRight size={12} /></button>
                      <button className="win-btn secondary">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .bento-section {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 280px 280px;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bento-item {
          background: #0a0a0a;
          border: 1px solid #222;
          border-radius: 1.5rem;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .bento-item:hover {
          border-color: var(--accent-color);
          box-shadow: 0 0 30px -10px rgba(59, 130, 246, 0.15);
        }

        .bento-content {
          z-index: 2;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .bento-content.centered {
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .bento-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: #ededed;
        }

        .highlight-blue {
          color: var(--accent-color);
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        /* Timezone Block */
        .timezone-block {
          grid-column: 1;
          grid-row: span 2;
          background: linear-gradient(to bottom, #0a0a0a, #050505);
        }

        /* Collaboration Block */
        .collaboration-block {
          grid-column: 2;
          grid-row: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Impact Block */
        .impact-block {
          grid-column: 2;
          grid-row: 2;
          background: radial-gradient(circle at top right, #111, #0a0a0a);
        }

        .timezone-flags {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .flag-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .globe-visual {
          flex-grow: 1;
          position: relative;
          margin: 1rem 0;
          border-radius: 50%;
          min-height: 200px;
          background-image: url('/globe-map.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .timezone-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: auto;
        }

        .location-indicator {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #fff;
        }

        .loc-label {
          display: block;
          font-size: 0.65rem;
          color: #666;
          letter-spacing: 0.1em;
        }

        .loc-value {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .connect-link {
          color: #fff;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .connect-link:hover {
          opacity: 1;
        }

        /* Collaboration Block */
        .collaboration-block {
          grid-column: 2;
          grid-row: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .email-copy-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #aaa;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }

        .email-copy-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .copied-tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #22c55e;
          color: #000;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
        }

        /* Tech Pills */
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .pill {
          background: #151515;
          border: 1px solid #333;
          padding: 0.3rem 0.7rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .impact-visual {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .code-window {
          background: #000;
          border: 1px solid #333;
          border-radius: 0.75rem;
          width: 100%;
          padding: 1rem;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }

        .window-header {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .red { background: #ef4444; }
        .yellow { background: #eab308; }
        .green { background: #22c55e; }

        .window-body {
          text-align: center;
        }

        .code-line {
          font-size: 1.25rem;
          color: #fff;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .highlight {
          color: var(--accent-color);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .window-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        .win-btn {
          padding: 0.4rem 0.8rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .primary {
          background: #fff;
          color: #000;
          font-weight: 600;
        }

        .secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .timezone-block { 
            grid-column: 1; 
            grid-row: auto; 
          }
          .collaboration-block { 
            grid-column: 1; 
            grid-row: auto; 
          }
          .impact-block { 
            grid-column: 1; 
            grid-row: auto; 
          }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .timezone-block, .collaboration-block, .impact-block {
            grid-column: 1;
            grid-row: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;
