import React from 'react';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div className="experience-list">
                    {resumeData.experience.map((job, index) => (
                        <div key={index} className="experience-card">
                            <div className="exp-header">
                                <div className="exp-role-company">
                                    <h3 className="exp-role">{job.role}</h3>
                                    <h4 className="exp-company">{job.company}</h4>
                                </div>
                                <div className="exp-meta">
                                    <span className="exp-date">
                                        <Calendar size={14} /> {job.date}
                                    </span>
                                    <span className="exp-location">
                                        <MapPin size={14} /> {job.location}
                                    </span>
                                </div>
                            </div>

                            <ul className="exp-achievements">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .experience-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-role {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .exp-company {
          font-size: 1rem;
          color: var(--accent-color);
          font-weight: 500;
        }

        .exp-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .exp-date, .exp-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .exp-achievements {
          padding-left: 1.5rem;
        }

        .exp-achievements li {
          position: relative;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .exp-achievements li::before {
          content: "▹";
          position: absolute;
          left: -1.5rem;
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .exp-meta {
            align-items: flex-start;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            margin-top: 0.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
