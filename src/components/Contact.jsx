import React from 'react';
import { resumeData } from '../data/resume';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
    const { email, phone } = resumeData.personal;

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <h2 className="contact-title">Let's work together</h2>
                <p className="contact-text">
                    I'm currently available for new opportunities.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href={`mailto:${email}`} className="btn btn-primary email-btn">
                    <Mail size={20} style={{ marginRight: '0.5rem' }} /> Say Hello
                </a>

                <div className="contact-links">
                    <a href={`mailto:${email}`} className="contact-link">
                        {email}
                    </a>
                    <span className="separator">•</span>
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-link">
                        {phone}
                    </a>
                    <span className="separator">•</span>
                    <a href="#" className="contact-link">
                        LinkedIn
                    </a>
                </div>

                <footer className="footer">
                    <p>&copy; 2025 Aagam Gopani. All rights reserved.</p>
                    <p className="footer-location">Toronto, ON</p>
                </footer>
            </div>

            <style>{`
        .contact-section {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(to top, rgba(59, 130, 246, 0.05), transparent);
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #fff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-text {
          font-size: 1.125rem;
          max-width: 600px;
          margin-bottom: 3rem;
        }

        .email-btn {
          font-size: 1.125rem;
          padding: 1rem 3rem;
          margin-bottom: 4rem;
        }

        .contact-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-link {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .contact-link:hover {
          color: var(--accent-color);
        }

        .separator {
          color: var(--border-color);
        }

        .footer {
          width: 100%;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          color: var(--text-secondary);
          font-size: 0.875rem;
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-title {
            font-size: 2.5rem;
          }
          
          .footer {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
