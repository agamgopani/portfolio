import React, { useState } from 'react';
import { resumeData } from '../data/resume';
import { Mail, Linkedin, Github, Twitter, Clock, Globe, Video, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

const BookingContact = () => {
    const { email, booking, linkedin } = resumeData.personal;
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentYear = new Date().getFullYear();

    // Generate calendar days
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const timeSlots = ["12:30am", "1:00am", "1:30am", "2:00am", "2:30am", "3:00am", "3:30am", "4:00am"];

    return (
        <section id="contact" className="section booking-section">
            <div className="container">

                {/* Header */}
                <div className="booking-header">
                    <span className="booking-subtitle">CONTACT</span>
                    <h2 className="booking-title">Get in touch</h2>

                    <div className="email-copy-wrapper" onClick={copyEmail}>
                        <Copy size={18} className="copy-icon" />
                        <span className="email-text">{email}</span>
                        {copied && <span className="copied-badge"><Check size={12} /> Copied</span>}
                    </div>

                    <div className="social-row">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-btn"><Linkedin size={20} /></a>
                        <a href="https://github.com/agamgopani" target="_blank" rel="noopener noreferrer" className="social-btn"><Github size={20} /></a>
                        <a href="#" className="social-btn"><Twitter size={20} /></a>
                    </div>

                    <div className="toggle-container">
                        <button className="toggle-btn active">Book a call</button>
                        <a href={`mailto:${email}`} className="toggle-btn">Fill a form</a>
                    </div>
                </div>

                {/* Calendar Interface */}
                <div className="calendar-interface">
                    {/* Sidebar */}
                    <div className="cal-sidebar">
                        <div className="cal-profile">
                            <div className="cal-avatar">AG</div>
                            <div>
                                <h3 className="cal-name">Aagam Gopani</h3>
                                <h4 className="cal-meeting-title">30 Min Meeting</h4>
                            </div>
                        </div>

                        <div className="cal-details">
                            <div className="cal-detail-item">
                                <Video size={16} /> Google Meet
                            </div>
                            <div className="cal-detail-item">
                                <Clock size={16} /> 30m
                            </div>
                            <div className="cal-detail-item">
                                <Globe size={16} /> America/Toronto
                            </div>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="cal-main">
                        <div className="cal-header">
                            <span className="cal-month">{currentMonth} {currentYear}</span>
                            <div className="cal-nav">
                                <ChevronLeft size={20} />
                                <ChevronRight size={20} />
                            </div>
                        </div>

                        <div className="cal-grid-wrapper">
                            <div className="cal-days-header">
                                <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                            </div>
                            <div className="cal-days-grid">
                                {/* Offset for start of month (visual approximation) */}
                                <span></span><span></span>
                                {days.map(day => (
                                    <a
                                        key={day}
                                        href={booking}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`cal-day ${day === 5 ? 'active' : ''}`}
                                    >
                                        {day}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Time Slots */}
                    <div className="cal-slots">
                        <div className="cal-date-header">Fri 05</div>
                        <div className="slots-list">
                            {timeSlots.map((time, i) => (
                                <a
                                    key={i}
                                    href={booking}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="time-slot"
                                >
                                    {time}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .booking-section {
          padding-top: 4rem;
          padding-bottom: 6rem;
          background: radial-gradient(circle at top center, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
        }

        .booking-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
        }

        .booking-subtitle {
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .booking-title {
          font-size: 4rem;
          font-weight: 400; /* Serif-like elegance */
          font-family: serif; /* Fallback */
          margin-bottom: 1.5rem;
          background: linear-gradient(to bottom, #fff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .email-copy-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 2rem;
          border: 1px solid transparent;
          position: relative;
        }

        .email-copy-wrapper:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .email-text {
          font-size: 1.125rem;
          color: var(--text-primary);
        }

        .copied-badge {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #22c55e;
          color: #000;
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
          animation: fadeIn 0.2s ease;
        }

        .social-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .social-btn {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .social-btn:hover {
          color: #fff;
        }

        .toggle-container {
          background: var(--surface-color);
          padding: 0.25rem;
          border-radius: 2rem;
          display: inline-flex;
          border: 1px solid var(--border-color);
        }

        .toggle-btn {
          padding: 0.75rem 2rem;
          border-radius: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .toggle-btn.active {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .toggle-btn:hover:not(.active) {
          color: var(--text-primary);
        }

        /* Calendar Interface */
        .calendar-interface {
          background: #0f0f0f;
          border: 1px solid var(--border-color);
          border-radius: 1.5rem;
          display: grid;
          grid-template-columns: 280px 1fr 200px;
          overflow: hidden;
          max-width: 1000px;
          margin: 0 auto;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
        }

        .cal-sidebar {
          padding: 2rem;
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .cal-avatar {
          width: 48px;
          height: 48px;
          background: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cal-name {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .cal-meeting-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .cal-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cal-detail-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .cal-main {
          padding: 2rem;
          border-right: 1px solid var(--border-color);
        }

        .cal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .cal-month {
          font-size: 1.1rem;
          font-weight: 500;
        }

        .cal-nav {
          display: flex;
          gap: 1rem;
          color: var(--text-secondary);
        }

        .cal-days-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .cal-days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
        }

        .cal-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.2s;
        }

        .cal-day:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .cal-day.active {
          background: #fff;
          color: #000;
          font-weight: 600;
        }

        .cal-slots {
          padding: 2rem;
          background: #0a0a0a;
          overflow-y: auto;
          max-height: 500px;
        }

        .cal-date-header {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .slots-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .time-slot {
          display: block;
          text-align: center;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .time-slot:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          background: rgba(59, 130, 246, 0.05);
        }

        @media (max-width: 1024px) {
          .calendar-interface {
            grid-template-columns: 1fr;
          }
          .cal-sidebar, .cal-main, .cal-slots {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }
        }
      `}</style>
        </section>
    );
};

export default BookingContact;
