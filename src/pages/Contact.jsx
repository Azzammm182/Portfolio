// src/pages/Contact.jsx
import React from 'react';
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import './Contact.css';

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
    title: "Contact Me",
    subtitle: "Let's work together and build something great",
    intro: "I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out through any of the channels below.",
    emailTitle: "Email",
    emailDesc: "The best way to reach me — I usually reply within 24 hours.",
    emailCta: "Send Email",
    githubTitle: "GitHub",
    githubDesc: "Check out my open source code and projects.",
    githubCta: "View Profile",
    linkedinTitle: "LinkedIn",
    linkedinDesc: "Let's connect professionally and grow our network.",
    linkedinCta: "Connect",
    locationTitle: "Location",
    locationValue: "Indonesia",
    telegramTitle: "Telegram",
    telegramCta: "Chat on Telegram",
    quickTitle: "Quick Contact",
    quickDesc: "Click any channel to reach me directly.",
  },
  id: {
    title: "Hubungi Saya",
    subtitle: "Mari bekerja sama dan bangun sesuatu yang hebat",
    intro: "Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar berkenalan. Silakan hubungi saya melalui kanal mana pun di bawah ini.",
    emailTitle: "Email",
    emailDesc: "Cara terbaik untuk menghubungi saya — biasanya saya balas dalam 24 jam.",
    emailCta: "Kirim Email",
    githubTitle: "GitHub",
    githubDesc: "Lihat kode open source dan proyek-proyek saya.",
    githubCta: "Lihat Profil",
    linkedinTitle: "LinkedIn",
    linkedinDesc: "Mari terhubung secara profesional dan perluas jaringan.",
    linkedinCta: "Terhubung",
    locationTitle: "Lokasi",
    locationValue: "Indonesia",
    telegramTitle: "Telegram",
    telegramCta: "Chat di Telegram",
    quickTitle: "Kontak Cepat",
    quickDesc: "Klik kanal mana pun untuk langsung menghubungi saya.",
  }
};

const Contact = ({ language }) => {
  const t = translations[language] || translations.en;

  const email = 'muhammadazzamm7@gmail.com';
  const github = 'https://github.com/Azzammm182';
  const linkedin = 'https://www.linkedin.com/in/muhammad-azzamm-a90921289/';
  const telegram = 'https://t.me/Azzammm182';

  const channels = [
    {
      icon: <Mail size={24} />,
      title: t.emailTitle,
      value: email,
      desc: t.emailDesc,
      cta: t.emailCta,
      href: `mailto:${email}`,
      color: '#3b82f6',
    },
    {
      icon: <GithubIcon size={24} />,
      title: t.githubTitle,
      value: 'github.com/Azzammm182',
      desc: t.githubDesc,
      cta: t.githubCta,
      href: github,
      color: '#a1a1aa',
    },
    {
      icon: <LinkedinIcon size={24} />,
      title: t.linkedinTitle,
      value: 'in/muhammad-azzamm-a90921289',
      desc: t.linkedinDesc,
      cta: t.linkedinCta,
      href: linkedin,
      color: '#0a66c2',
    },
    {
      icon: <Send size={24} />,
      title: t.telegramTitle,
      value: '@Azzammm182',
      desc: t.quickDesc,
      cta: t.telegramCta,
      href: telegram,
      color: '#22c55e',
    },
  ];

  return (
    <div className="contact-page container">
      {/* Header */}
      <div className="contact-header">
        <h1 className="contact-title">{t.title}</h1>
        <p className="contact-subtitle">{t.subtitle}</p>
        <p className="contact-intro">{t.intro}</p>
      </div>

      {/* Grid kartu kontak */}
      <div className="contact-grid">
        {channels.map((channel, index) => (
          <a
            key={index}
            href={channel.href}
            target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="contact-card"
          >
            <div
              className="contact-icon"
              style={{ backgroundColor: `${channel.color}20`, color: channel.color }}
            >
              {channel.icon}
            </div>
            <div className="contact-card-body">
              <h3 className="contact-card-title">{channel.title}</h3>
              <p className="contact-card-value">{channel.value}</p>
              <p className="contact-card-desc">{channel.desc}</p>
              <span className="contact-card-cta">
                {channel.cta} <ArrowRight size={15} />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Lokasi */}
      <div className="contact-location">
        <MapPin size={20} />
        <span>
          {t.locationTitle}: <strong>{t.locationValue}</strong>
        </span>
      </div>
    </div>
  );
};

export default Contact;
