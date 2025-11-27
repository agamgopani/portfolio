import React from 'react';
import { resumeData } from '../data/resume';
import { Users, Globe, Cpu, Mail, ArrowRight } from 'lucide-react';

const BentoGrid = () => {
    return (
        <section id="about" className="section bento-section">
            <div className="container">
                <div className="bento-grid">

                    {/* Collaboration Block */}
                    <div className="bento-item collaboration-block">
                        <div className="bento-content">
                            <div className="icon-box">
                                <Users size={24} color="#3b82f6" />
                            </div>
                            <h3 className="bento-title">Collaboration</h3>
                            <p className="bento-text">
                                I prioritize client collaboration, fostering open communication to build truly impactful solutions.
                            </p>
                        </div>
                        <div className="bento-visual collaboration-visual">
                            {/* Abstract visual representation of connection */}
                            <div className="connection-node node-1"></div>
                            <div className="connection-node node-2"></div>
                            <div className="connection-node node-3"></div>
                            <div className="connection-line line-1"></div>
                            <div className="connection-line line-2"></div>
                        </div>
                    </div>

                    {/* Tech Stack Block */}
                    <div className="bento-item tech-block">
                        <div className="bento-content">
                            <h3 className="bento-title">Passionate about cutting-edge technologies</h3>
                            <div className="tech-tags">
                                <span className="tech-tag"><Cpu size={14} /> React</span>
                                <span className="tech-tag">Next.js</span>
                                <span className="tech-tag">TypeScript</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">AWS</span>
                                <span className="tech-tag">Docker</span>
                                <span className="tech-tag">PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    {/* Time Zones Block */}
                    <div className="bento-item timezone-block">
                        <div className="bento-content">
                            <h3 className="bento-title">Flexible with time zone communications</h3>
                            <div className="timezone-map">
                                <div className="map-bg"></div>
                                <div className="timezone-badge ca">🇨🇦 Toronto</div>
                                <div className="timezone-badge us">🇺🇸 USA</div>
                                <div className="timezone-badge in">🇮🇳 India</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Block */}
                    <div className="bento-item cta-block">
                        <div className="bento-content">
                            <h3 className="bento-title">Let's work together on your next project</h3>
                            <a href={`mailto:${resumeData.personal.email}`} className="bento-cta-btn">
                                <Mail size={18} />
                                {resumeData.personal.email}
                            </a>
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
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, minmax(280px, auto));
          gap: 1.5rem;
        }

        .bento-item {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
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
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }

        .bento-content {
          z-index: 2;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .bento-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          background: linear-gradient(to bottom right, #fff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bento-text {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        /* Collaboration Block */
        .collaboration-block {
          grid-column: span 2;
        }

        .collaboration-visual {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          width: 200px;
          height: 100px;
          opacity: 0.5;
        }

        .connection-node {
          width: 12px;
          height: 12px;
          background: var(--accent-color);
          border-radius: 50%;
          position: absolute;
          box-shadow: 0 0 15px var(--accent-color);
        }

        .node-1 { top: 10px; left: 10px; }
        .node-2 { bottom: 10px; right: 50px; }
        .node-3 { top: 40px; right: 10px; }

        .connection-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
          height: 1px;
          opacity: 0.3;
        }

        .line-1 { width: 100%; top: 20px; transform: rotate(15deg); }
        .line-2 { width: 80%; bottom: 30px; right: 0; transform: rotate(-10deg); }

        /* Tech Stack Block */
        .tech-block {
          grid-column: span 1;
          background: linear-gradient(to bottom right, var(--surface-color), rgba(59, 130, 246, 0.05));
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Time Zone Block */
        .timezone-block {
          grid-column: span 1;
          min-height: 300px;
        }

        .timezone-map {
          margin-top: auto;
          height: 150px;
          position: relative;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 1rem;
          overflow: hidden;
        }

        .timezone-badge {
          position: absolute;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .ca { top: 20%; left: 20%; }
        .us { top: 40%; left: 30%; }
        .in { bottom: 30%; right: 20%; }

        /* CTA Block */
        .cta-block {
          grid-column: span 2;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(to right, var(--surface-color), rgba(59, 130, 246, 0.05));
        }

        .cta-block .bento-content {
          align-items: center;
          justify-content: center;
        }

        .bento-cta-btn {
          margin-top: 1.5rem;
          background: var(--text-primary);
          color: var(--bg-color);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.2s;
        }

        .bento-cta-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .collaboration-block { grid-column: span 2; }
          .tech-block { grid-column: span 1; }
          .timezone-block { grid-column: span 1; }
          .cta-block { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .collaboration-block, .tech-block, .timezone-block, .cta-block {
            grid-column: span 1;
          }
          .collaboration-visual {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default BentoGrid;
