// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { ArrowRight, Mail, Send, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/profile.jpg';

// SVG inline untuk ikon yang tidak tersedia di versi lucide-react ini
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z"/>
  </svg>
);

const translations = {
  en: {
    greeting: "HELLO, I'M",
    role: "Web Developer & AI Agent Learner",
    description: "I'm a passionate web developer and AI enthusiast, always exploring new technologies to build useful and impactful solutions for the future.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    location: "Indonesia",
  },
  id: {
    greeting: "HALO, SAYA",
    role: "Web Developer & Pelajar AI Agent",
    description: "Saya seorang web developer yang bersemangat dan antusias dengan AI, selalu mengeksplorasi teknologi baru untuk membangun solusi yang berguna dan berdampak di masa depan.",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    location: "Indonesia",
  }
};

const Home = ({ language }) => {
  const t = translations[language] || translations.en;

  // Animasi reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home container">
      <div className="home-content">
        <div className="text-section">
          <div className="greeting reveal visible">
            <span className="line"></span>
            <span className="greeting-text">{t.greeting}</span>
          </div>

          <h1 className="name-title reveal visible">
            Muhammad Taura<br />
            <span className="highlight">Abdullah Azam</span>
          </h1>

          <h2 className="role reveal visible">{t.role}</h2>
          <p className="description reveal visible">{t.description}</p>

          <div className="location-badge reveal visible">
            <MapPin size={15} /> {t.location}
          </div>

          <div className="cta-buttons reveal visible">
            <Link to="/projects" className="btn btn-primary">
              {t.viewProjects} <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <Mail size={18} /> {t.contactMe}
            </Link>
          </div>

          <div className="social-icons reveal visible">
            <a href="https://github.com/Azzammm182" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:muhammadazzamm7@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://t.me/Azzammm182" target="_blank" rel="noreferrer" aria-label="Telegram">
              <Send size={20} />
            </a>
          </div>
        </div>

        <div className="image-section reveal visible">
          <div className="image-wrapper">
            <div className="blue-circle"></div>
            <div className="image-frame">
              <img src={profileImg} alt="Muhammad Taura Abdullah Azam" className="profile-img" />
            </div>
            <div className="decorative-dots"></div>
            <div className="image-badge badge-year">2026</div>
            <div className="image-badge badge-role">Web Dev</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
