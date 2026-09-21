// src/pages/Home.jsx
import React from 'react';
import { ArrowRight, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/profile.jpg';

// Kamus terjemahan
const translations = {
  en: {
    greeting: "HELLO, I'M",
    role: "Web Developer & AI Agent Learner",
    description: "I'm a passionate web developer and AI enthusiast, always exploring new technologies to build useful and impactful solutions for the future.",
    viewProjects: "View Projects",
  },
  id: {
    greeting: "HALO, SAYA",
    role: "Web Developer & Pelajar AI Agent",
    description: "Saya seorang web developer yang bersemangat dan antusias dengan AI, selalu mengeksplorasi teknologi baru untuk membangun solusi yang berguna dan berdampak di masa depan.",
    viewProjects: "Lihat Proyek",
  }
};

// Terima props language
const Home = ({ language }) => {
  // Ambil teks sesuai bahasa
  const t = translations[language];

  return (
    <div className="home container">
      <div className="home-content">
        <div className="text-section">
          <div className="greeting">
            <span className="line"></span>
            {/* Gunakan t.greeting */}
            <span className="greeting-text">{t.greeting}</span>
          </div>
          
          <h1 className="name-title">
            Muhammad Taura<br />
            <span className="highlight">Abdullah Azam</span>
          </h1>
          
          {/* Gunakan t.role */}
          <h2 className="role">{t.role}</h2>
          
          {/* Gunakan t.description */}
          <p className="description">{t.description}</p>

          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">
              {/* Gunakan t.viewProjects */}
              {t.viewProjects} <ArrowRight size={18} />
            </Link>
            <a href="https://github.com/Azzammm182" target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/Azzammm182" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', fontWeight: '600' }}>GitHub</a>
            <a href="#" style={{ fontSize: '0.9rem', fontWeight: '600' }}>LinkedIn</a>
            <a href="#"><Mail size={20} /></a>
            <a href="#"><Send size={20} /></a>
          </div>
        </div>

        <div className="image-section">
          <div className="image-wrapper">
            <div className="blue-circle"></div>
            <img src={profileImg} alt="Profile" className="profile-img" />
            <div className="decorative-dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;