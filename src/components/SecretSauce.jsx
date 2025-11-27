import React from 'react';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiCss3, SiJavascript,
    SiNodedotjs, SiPython, SiAmazon, SiDocker, SiPostgresql, SiGit,
    SiGithub, SiFigma, SiNotion, SiLinux, SiVite, SiHtml5, SiMongodb, SiExpress
} from 'react-icons/si';

const SecretSauce = () => {
    const skills = [
        { icon: <SiReact />, name: "React", color: "#61DAFB" },
        { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
        { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#ffffff" },
        { icon: <SiPython />, name: "Python", color: "#3776AB" },
        { icon: <SiAmazon />, name: "AWS", color: "#FF9900" },
        { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiGit />, name: "Git", color: "#F05032" },
        { icon: <SiGithub />, name: "GitHub", color: "#ffffff" },
        { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
        { icon: <SiNotion />, name: "Notion", color: "#ffffff" },
        { icon: <SiLinux />, name: "Linux", color: "#FCC624" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" },
        { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    ];

    return (
        <section id="skills" className="section sauce-section">
            <div className="container">
                <div className="sauce-header">
                    <span className="sauce-subtitle">MY SKILLS</span>
                    <h2 className="sauce-title">
                        The Secret <span className="sauce-gradient">Sauce</span>
                    </h2>
                </div>

                <div className="sauce-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="sauce-item" style={{ '--hover-color': skill.color }}>
                            <div className="sauce-icon">
                                {skill.icon}
                            </div>
                            <span className="sauce-tooltip">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .sauce-section {
          padding: 6rem 0;
          overflow: hidden;
        }

        .sauce-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .sauce-subtitle {
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          color: var(--text-secondary);
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }

        .sauce-title {
          font-size: 4rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .sauce-gradient {
          background: linear-gradient(to right, #a78bfa, #3b82f6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
          font-family: serif; /* Or a specific serif font if available */
        }

        .sauce-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .sauce-item {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          cursor: pointer;
        }

        .sauce-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: #fff;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px -10px var(--hover-color);
        }

        .sauce-item:hover .sauce-icon {
          color: var(--hover-color);
        }

        .sauce-tooltip {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          color: #fff;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          white-space: nowrap;
          pointer-events: none;
        }

        .sauce-item:hover .sauce-tooltip {
          opacity: 1;
          visibility: visible;
          bottom: -35px;
        }

        @media (max-width: 768px) {
          .sauce-title {
            font-size: 2.5rem;
          }
          
          .sauce-item {
            width: 50px;
            height: 50px;
            font-size: 1.25rem;
          }
        }
      `}</style>
        </section>
    );
};

export default SecretSauce;
