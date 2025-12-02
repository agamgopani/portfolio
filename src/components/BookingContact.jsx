import React, { useState } from 'react';
import { resumeData } from '../data/resume';
import { Mail, Linkedin, Github, Twitter, Clock, Globe, Video, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Copy, Check, Send } from 'lucide-react';

const BookingContact = () => {
  const { email, booking, linkedin } = resumeData.personal;
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('booking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <button
              className={`toggle-btn ${activeTab === 'booking' ? 'active' : ''}`}
              onClick={() => setActiveTab('booking')}
            >
              Book a call
            </button>
            <button
              className={`toggle-btn ${activeTab === 'form' ? 'active' : ''}`}
              onClick={() => setActiveTab('form')}
            >
              Fill a form
            </button>
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

          {/* Content Area */}
          <div className="content-area">
            {activeTab === 'booking' ? (
              <div className="cal-embed-container">
                <iframe
                  src="https://cal.com/aagam-gopani?theme=dark&layout=month_view"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Book a call"
                ></iframe>
              </div>
            ) : (
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="label-row">
                      <label htmlFor="message">Message</label>
                      <span className="char-count">{formData.message.length}/1000</span>
                    </div>
                    <textarea
                      id="message"
                      placeholder="What would you like to discuss?"
                      rows="6"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      maxLength={1000}
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send size={18} /> Send message
                  </button>
                </form>
              </div>
            )}
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
          grid-template-columns: 280px 1fr;
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

        .content-area {
          flex-grow: 1;
          background: #000;
          min-height: 600px;
          display: flex;
          flex-direction: column;
        }

        .cal-embed-container {
          flex-grow: 1;
          height: 100%;
          width: 100%;
        }

        /* Contact Form Styles */
        .contact-form-container {
          padding: 3rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #fff;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .char-count {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
          background: #1a1a1a;
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          background: #222;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-btn {
          margin-top: 1rem;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .calendar-interface {
            grid-template-columns: 1fr;
          }
          .cal-sidebar {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }
          .content-area {
            min-height: 500px;
          }
          .contact-form-container {
            padding: 2rem;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default BookingContact;
