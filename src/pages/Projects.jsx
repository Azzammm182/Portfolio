// src/pages/Projects.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Folder, ShoppingCart, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import './Projects.css';
import homePreview from '../assets/projects/home-preview.png';

// SVG inline untuk ikon GitHub (tidak tersedia di versi lucide-react ini)
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
);

const translations = {
  en: {
    title: "My Projects",
    subtitle: "A collection of my work and experiments",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    techStack: "Tech Stack",
    slide: "Slide",
    of: "of",
    portfolioDesc: "A modern and responsive personal portfolio website built with React and Vite. Features include multi-page navigation, dark mode design, bilingual support (EN/ID), and smooth animations.",
    ecommerceDesc: "A full-featured e-commerce web app built with a modern frontend stack. Includes product catalog, search, cart, wishlist, checkout flow, vouchers, and responsive design for mobile and desktop.",
  },
  id: {
    title: "Proyek Saya",
    subtitle: "Kumpulan karya dan eksperimen saya",
    viewCode: "Lihat Kode",
    liveDemo: "Demo Langsung",
    techStack: "Teknologi",
    slide: "Slide",
    of: "dari",
    portfolioDesc: "Website portfolio pribadi yang modern dan responsif, dibangun dengan React dan Vite. Fitur meliputi navigasi multi-halaman, desain dark mode, dukungan dua bahasa (EN/ID), dan animasi halus.",
    ecommerceDesc: "Aplikasi e-commerce lengkap yang dibangun dengan stack frontend modern. Mencakup katalog produk, pencarian, keranjang, wishlist, alur checkout, voucher, dan desain responsif untuk mobile serta desktop.",
  }
};

const Projects = ({ language }) => {
  const t = translations[language] || translations.en;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: t.portfolioDesc,
      tech: ["React", "Vite", "React Router", "CSS", "Lucide Icons"],
      github: "https://github.com/Azzammm182",
      demo: "https://muhammadazzam.vercel.app",
      image: homePreview,
      status: "completed",
      category: "Portfolio",
      icon: <Globe size={22} />,
    },
    {
      title: "E-Commerce Website",
      description: t.ecommerceDesc,
      tech: ["React", "Vite", "CSS", "LocalStorage", "Responsive"],
      github: "https://github.com/Azzammm182",
      demo: "https://ecommerce-two-gamma-44.vercel.app",
      image: null,
      status: "completed",
      category: "E-Commerce",
      icon: <ShoppingCart size={22} />,
    },
  ];

  const total = projects.length;

  const goTo = useCallback((index) => {
    setCurrent((index + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play slide (pause saat hover / sentuh)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, total]);

  // Swipe / drag di layar sentuh
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 60) {
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <div className="projects-page container">
      <div className="projects-header">
        <h1 className="projects-title">{t.title}</h1>
        <p className="projects-subtitle">{t.subtitle}</p>
      </div>

      {/* ========== SLIDER ========== */}
      <div
        className="projects-slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="slider-slide">
                <article className="project-card">
                  <div className="project-thumbnail">
                    {project.image ? (
                      <img src={project.image} alt={project.title} loading="lazy" />
                    ) : (
                      <div className="thumbnail-placeholder ecommerce">
                        <ShoppingCart size={72} />
                        <span className="thumbnail-text">E-Commerce Preview</span>
                      </div>
                    )}
                    <span className={`status-badge ${project.status}`}>
                      {project.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                    </span>
                    <span className="category-badge">
                      {project.icon} {project.category}
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
                          <GithubIcon size={16} /> {t.viewCode}
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link demo"
                        >
                          <ExternalLink size={16} /> {t.liveDemo}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol prev/next */}
        <button className="slider-arrow prev" onClick={prev} aria-label="Previous project">
          <ChevronLeft size={26} />
        </button>
        <button className="slider-arrow next" onClick={next} aria-label="Next project">
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Dots + counter */}
      <div className="slider-footer">
        <div className="slider-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`${t.slide} ${index + 1}`}
            ></button>
          ))}
        </div>
        <span className="slider-counter">
          {t.slide} {current + 1} {t.of} {total}
        </span>
      </div>
    </div>
  );
};

export default Projects;
