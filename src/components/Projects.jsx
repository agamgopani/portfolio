import React from 'react';
import { resumeData } from '../data/resume';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Selected Projects</h2>

                <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-tech">{project.tech}</p>
                                <p className="project-desc">{project.description}</p>

                                {project.details && (
                                    <ul className="project-details">
                                        {project.details.slice(0, 2).map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}

                                <div className="project-links">
                                    <a href="#" className="link-arrow">
                                        View Project <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .project-tech {
          color: var(--accent-color);
          font-family: monospace;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .project-desc {
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .project-details {
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-details li {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }

        .project-details li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--text-secondary);
        }

        .link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .link-arrow:hover {
          color: var(--accent-color);
          gap: 0.75rem;
        }
      `}</style>
        </section>
    );
};

export default Projects;
