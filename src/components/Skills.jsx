import React from 'react';
import { resumeData } from '../data/resume';

const Skills = () => {
    const { skills } = resumeData;

    const categories = [
        { title: "Programming & Frameworks", items: skills.programming },
        { title: "Cloud & DevOps", items: skills.cloud },
        { title: "Data Science & ML", items: skills.datascience },
        { title: "Databases", items: skills.databases },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="skill-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.items.split(', ').map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .skill-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-left: 3px solid var(--accent-color);
          padding-left: 1rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: var(--accent-color);
          color: var(--accent-color);
        }
      `}</style>
        </section>
    );
};

export default Skills;
