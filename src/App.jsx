import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SecretSauce from './components/SecretSauce';
import BookingContact from './components/BookingContact';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div
        className="cursor-dot"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />
      <div
        className="cursor-outline"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">AG.</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <BentoGrid />
        <Experience />
        <Projects />
        <SecretSauce />
        <BookingContact />
      </main>

      <style>{`
        .cursor-dot,
        .cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 9999;
          pointer-events: none;
        }

        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--text-primary);
        }

        .cursor-outline {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: width 0.2s, height 0.2s, background-color 0.2s;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .cursor-dot, .cursor-outline {
            display: none;
          }
          
          .nav-links {
            display: none; /* Simple mobile handling for now */
          }
        }
      `}</style>
    </div>
  );
}

export default App;
