// src/pages/About.jsx
import React from 'react';
import { 
  Download, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ExternalLink 
} from 'lucide-react';
import './About.css';

// ===========================================
// KAMUS TERJEMAHAN (EN/ID)
// ===========================================
const translations = {
  en: {
    title: "About Me",
    subtitle: "Get to know me better",
    p1: "Hello! I'm Muhammad Taura Abdullah Azam, a passionate Web Developer and AI Agent Learner based in Indonesia. My journey in technology started from curiosity about how websites work, and it has grown into a deep passion for building useful and impactful digital solutions.",
    p2: "Currently, I'm focusing on learning AI Agents and modern web technologies. I believe that the future of the web is not just about beautiful interfaces, but also about intelligent systems that can help people in their daily lives.",
    p3: "When I'm not coding, I enjoy exploring new technologies, watching tech tutorials, and continuously improving my skills. I'm always open to collaboration and new opportunities to grow.",
    infoTitle: "Personal Information",
    location: "Location",
    locationValue: "Indonesia",
    education: "Education",
    educationValue: "Computer Science / IT",
    experience: "Experience",
    experienceValue: "Web Development & AI",
    downloadCV: "Download CV",
    certTitle: "Certificates & Achievements",
    certSubtitle: "Proof of my learning journey",
    viewCert: "View Certificate",
    certWebFundamental: "Web Programming Fundamentals",
  },
  id: {
    title: "Tentang Saya",
    subtitle: "Kenali saya lebih dekat",
    p1: "Halo! Saya Muhammad Taura Abdullah Azam, seorang Web Developer dan Pelajar AI Agent yang berbasis di Indonesia. Perjalanan saya di dunia teknologi dimulai dari rasa penasaran tentang cara kerja website, dan kini telah tumbuh menjadi passion yang mendalam untuk membangun solusi digital yang berguna dan berdampak.",
    p2: "Saat ini, saya sedang fokus mempelajari AI Agents dan teknologi web modern. Saya percaya bahwa masa depan web bukan hanya tentang antarmuka yang indah, tetapi juga tentang sistem cerdas yang dapat membantu orang dalam kehidupan sehari-hari.",
    p3: "Ketika tidak sedang coding, saya suka mengeksplorasi teknologi baru, menonton tutorial tech, dan terus meningkatkan kemampuan saya. Saya selalu terbuka untuk kolaborasi dan peluang baru untuk berkembang.",
    infoTitle: "Informasi Pribadi",
    location: "Lokasi",
    locationValue: "Indonesia",
    education: "Pendidikan",
    educationValue: "Ilmu Komputer / IT",
    experience: "Pengalaman",
    experienceValue: "Web Development & AI",
    downloadCV: "Unduh CV",
    certTitle: "Sertifikat & Pencapaian",
    certSubtitle: "Bukti perjalanan belajar saya",
    viewCert: "Lihat Sertifikat",
    certWebFundamental: "Belajar Dasar Pemrograman Web",
  }
};

// ===========================================
// KOMPONEN ABOUT
// ===========================================
const About = ({ language }) => {
  // Fallback ke 'en' jika language undefined
  const t = translations[language] || translations.en;

  // Data Personal Information
  const personalInfo = [
    { 
      icon: <MapPin size={22} />, 
      label: t.location, 
      value: t.locationValue 
    },
    { 
      icon: <GraduationCap size={22} />, 
      label: t.education, 
      value: t.educationValue 
    },
    { 
      icon: <Briefcase size={22} />, 
      label: t.experience, 
      value: t.experienceValue 
    },
  ];

  // Data Sertifikat
  const certificates = [
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      year: "2026",
      link: "https://www.dicoding.com/certificates/ERZR7G69MZYV",
      color: "#3b82f6",
      id: "ERZR7G69MZYV",
    },
  ];

  return (
    <div className="about-page container">
      
      {/* ========== HEADER ========== */}
      <div className="about-header">
        <h1 className="about-title">{t.title}</h1>
        <p className="about-subtitle">{t.subtitle}</p>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="about-content">
        
        {/* Kolom Kiri: Deskripsi */}
        <div className="about-text">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>

          <a 
            href="https://drive.google.com/file/d/1YDI0elaCuWdjaFZlfxVfwH1GvafUF-7O/view?usp=drive_link" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary" 
            style={{ marginTop: '1.5rem' }}
          >
            <Download size={18} /> {t.downloadCV}
          </a>
        </div>

        {/* Kolom Kanan: Personal Information */}
        <div className="about-info">
          <h3 className="info-title">{t.infoTitle}</h3>
          
          <div className="info-list">
            {personalInfo.map((item, index) => (
              <div key={index} className="info-item">
                <div className="info-icon">{item.icon}</div>
                <div className="info-detail">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== CERTIFICATES SECTION ========== */}
      <div className="cert-section">
        <div className="cert-header">
          <h2 className="cert-title">
            <Award size={28} /> {t.certTitle}
          </h2>
          <p className="cert-subtitle">{t.certSubtitle}</p>
        </div>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card">
              
              <div 
                className="cert-icon" 
                style={{ 
                  backgroundColor: `${cert.color}20`, 
                  color: cert.color 
                }}
              >
                <Award size={26} />
              </div>

              <div className="cert-content">
                <h3 className="cert-name">
                  {language === 'en' ? t.certWebFundamental : cert.title}
                </h3>
                <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
                <p className="cert-id">ID: {cert.id}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cert-link"
                  style={{ color: cert.color }}
                >
                  {t.viewCert} <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;