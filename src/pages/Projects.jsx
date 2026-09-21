// src/pages/Projects.jsx
import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import './Projects.css';
import homePreview from '../assets/projects/home-preview.png'; // <-- IMPORT GAMBAR

const translations = {
  en: {
    title: "My Projects",
    subtitle: "A collection of my work and experiments",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    techStack: "Tech Stack",
  },
  id: {
    title: "Proyek Saya",
    subtitle: "Kumpulan karya dan eksperimen saya",
    viewCode: "Lihat Kode",
    liveDemo: "Demo Langsung",
    techStack: "Teknologi",
  }
};

const Projects = ({ language }) => {
  const t = translations[language] || translations.en;

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern and responsive personal portfolio website built with React and Vite. Features include multi-page navigation, dark mode design, bilingual support (EN/ID), and smooth animations. This website showcases my profile, skills, AI learning journey, and projects.",
      tech: ["React", "Vite", "React Router", "CSS", "Lucide Icons"],
      github: "https://github.com/Azzammm182",
      demo: null,
      image: homePreview,   // <-- GUNAKAN GAMBAR DI SINI
      status: "in-progress",
    },
  ];

  return (
    <div className="projects-page container">
      <div className="projects-header">
        <h1 className="projects-title">{t.title}</h1>
        <p className="projects-subtitle">{t.subtitle}</p>
      </div>

      <div className="projects-grid-single">
        {projects.map((project, index) => (
          <div key={index} className="project-card featured">
            <div className="project-thumbnail">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="thumbnail-placeholder">
                  <Folder size={64} />
                  <span className="thumbnail-text">Portfolio Preview</span>
                </div>
              )}
              <span className={`status-badge ${project.status}`}>
                {project.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
              </span>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link"
                  >
                    {t.viewCode}
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link demo"
                  >
                    <ExternalLink size={18} /> {t.liveDemo}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;