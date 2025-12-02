import React from 'react';
import { resumeData } from '../data/resume';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { name, role, summary } = resumeData.personal;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge animate-in">
            <span className="status-dot"></span>
            Available for work
          </div>

          <h1 className="hero-title animate-in delay-1">
            {name}
          </h1>

          <h2 className="hero-subtitle animate-in delay-2">
            {role}
          </h2>

          <p className="hero-description animate-in delay-3">
            {summary[0]}
          </p>

          <div className="hero-actions animate-in delay-3">
            <a href="#contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Work
            </a>
          </div>
        </div>

        <div className="hero-visual animate-in delay-2">
          <div className="gradient-orb"></div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px; /* Navbar height */
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
          z-index: 1;
        }

        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 600px;
          z-index: 10;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 2rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-size: 4.5rem;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 2rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-bottom: 2rem;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 3rem;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .hero-visual {
          position: relative;
        }

        .gradient-orb {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          filter: blur(80px);
          opacity: 0.6;
          animation: float 10s ease-in-out infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }

        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .gradient-orb {
            width: 300px;
            height: 300px;
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
