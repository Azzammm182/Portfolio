// src/pages/Skills.jsx
import React from 'react';
import { Code2, Brain, Globe, Database } from 'lucide-react';
import './Skills.css';

// Kamus terjemahan untuk halaman Skills
const translations = {
  en: {
    title: "My Skills",
    subtitle: "Technologies and tools I work with",
    webDev: "Web Developer",
    webDevDesc: "Building and developing websites using modern web technologies.",
    aiAgent: "AI Agent Learner",
    aiAgentDesc: "Learning and developing AI Agents and artificial intelligence technologies.",
    languages: "Programming Languages",
    tools: "Tools & Frameworks",
  },
  id: {
    title: "Keahlian Saya",
    subtitle: "Teknologi dan alat yang saya gunakan",
    webDev: "Web Developer",
    webDevDesc: "Membangun dan mengembangkan website menggunakan teknologi web modern.",
    aiAgent: "Pelajar AI Agent",
    aiAgentDesc: "Mempelajari dan mengembangkan AI Agent serta teknologi kecerdasan buatan.",
    languages: "Bahasa Pemrograman",
    tools: "Alat & Framework",
  }
};

const Skills = ({ language }) => {
  const t = translations[language];

  // Data Programming Languages - SUDAH DIUPDATE SESUAI LEVEL ANDA
  const programmingLanguages = [
    { name: 'Python', level: 90, color: '#3776ab' },
    { name: 'JavaScript', level: 60, color: '#f7df1e' },
    { name: 'PHP', level: 90, color: '#777bb4' },
    { name: 'CSS', level: 80, color: '#1572b6' },
    { name: 'HTML', level: 80, color: '#e34f26' },
  ];

  // Data Tools & Frameworks
  const tools = [
    { name: 'React.js', level: 80, color: '#61dafb' },
    { name: 'Vite', level: 85, color: '#646cff' },
    { name: 'Git & GitHub', level: 80, color: '#f05032' },
    { name: 'Tailwind CSS', level: 75, color: '#38bdf8' },
  ];

  return (
    <div className="skills-page container">
      {/* Header Halaman */}
      <div className="skills-header">
        <h1 className="skills-title">{t.title}</h1>
        <p className="skills-subtitle">{t.subtitle}</p>
      </div>

      {/* Kartu Utama: Web Dev & AI Agent */}
      <div className="main-skills-grid">
        <div className="skill-card">
          <div className="skill-icon">
            <Code2 size={32} />
          </div>
          <h3 className="skill-card-title">{t.webDev}</h3>
          <p className="skill-card-desc">{t.webDevDesc}</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <Brain size={32} />
          </div>
          <h3 className="skill-card-title">{t.aiAgent}</h3>
          <p className="skill-card-desc">{t.aiAgentDesc}</p>
        </div>
      </div>

      {/* Section: Programming Languages */}
      <div className="skills-section">
        <h2 className="section-title">
          <Globe size={24} /> {t.languages}
        </h2>
        <div className="skills-bars">
          {programmingLanguages.map((skill, index) => (
            <div key={index} className="skill-bar-item">
              <div className="skill-bar-header">
                <span className="skill-bar-name">{skill.name}</span>
                <span className="skill-bar-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Tools & Frameworks */}
      <div className="skills-section">
        <h2 className="section-title">
          <Database size={24} /> {t.tools}
        </h2>
        <div className="skills-bars">
          {tools.map((skill, index) => (
            <div key={index} className="skill-bar-item">
              <div className="skill-bar-header">
                <span className="skill-bar-name">{skill.name}</span>
                <span className="skill-bar-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;