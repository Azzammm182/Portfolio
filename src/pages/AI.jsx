// src/pages/AI.jsx
import React from 'react';
import { Brain, Bot, Sparkles, Cpu, Zap, BookOpen, Target, Rocket } from 'lucide-react';
import './AI.css';

// Kamus terjemahan
const translations = {
  en: {
    title: "AI Journey",
    subtitle: "My path to becoming an AI Agent Developer",
    intro: "I'm currently on a journey to master AI Agents and artificial intelligence technologies. Here's what I'm focusing on and my learning roadmap.",
    focusTitle: "Current Focus",
    focusAI: "AI Agents",
    focusAIDesc: "Building autonomous agents that can perform tasks intelligently.",
    focusLLM: "Large Language Models",
    focusLLMDesc: "Understanding and integrating LLMs like GPT into applications.",
    focusAutomation: "Automation",
    focusAutomationDesc: "Creating smart automation workflows using AI tools.",
    roadmapTitle: "Learning Roadmap",
    phase1: "Phase 1: Fundamentals",
    phase1Desc: "Python, Basic ML concepts, and AI terminology.",
    phase2: "Phase 2: LLM Integration",
    phase2Desc: "Working with OpenAI API, Prompt Engineering, and LangChain.",
    phase3: "Phase 3: Building AI Agents",
    phase3Desc: "Creating autonomous agents with tools, memory, and reasoning.",
    phase4: "Phase 4: Real Projects",
    phase4Desc: "Building real-world AI applications and deploying them.",
    toolsTitle: "AI Tools & Technologies",
    goalTitle: "My Goal",
    goalDesc: "To become a professional AI Agent Developer who builds intelligent systems that solve real-world problems.",
    status: "Status",
    statusValue: "Currently Learning",
  },
  id: {
    title: "Perjalanan AI",
    subtitle: "Jalur saya menjadi AI Agent Developer",
    intro: "Saat ini saya sedang dalam perjalanan untuk menguasai AI Agent dan teknologi kecerdasan buatan. Berikut fokus saya dan roadmap pembelajaran saya.",
    focusTitle: "Fokus Saat Ini",
    focusAI: "AI Agent",
    focusAIDesc: "Membangun agen otonom yang dapat melakukan tugas secara cerdas.",
    focusLLM: "Large Language Models",
    focusLLMDesc: "Memahami dan mengintegrasikan LLM seperti GPT ke dalam aplikasi.",
    focusAutomation: "Otomatisasi",
    focusAutomationDesc: "Membuat alur kerja otomatisasi cerdas menggunakan alat AI.",
    roadmapTitle: "Roadmap Pembelajaran",
    phase1: "Fase 1: Dasar-Dasar",
    phase1Desc: "Python, konsep dasar ML, dan terminologi AI.",
    phase2: "Fase 2: Integrasi LLM",
    phase2Desc: "Bekerja dengan OpenAI API, Prompt Engineering, dan LangChain.",
    phase3: "Fase 3: Membangun AI Agent",
    phase3Desc: "Membuat agen otonom dengan tools, memori, dan penalaran.",
    phase4: "Fase 4: Proyek Nyata",
    phase4Desc: "Membangun aplikasi AI dunia nyata dan menerapkannya.",
    toolsTitle: "Alat & Teknologi AI",
    goalTitle: "Tujuan Saya",
    goalDesc: "Menjadi AI Agent Developer profesional yang membangun sistem cerdas untuk memecahkan masalah nyata.",
    status: "Status",
    statusValue: "Sedang Belajar",
  }
};

const AI = ({ language }) => {
  const t = translations[language];

  const focusAreas = [
    { icon: <Bot size={28} />, title: t.focusAI, desc: t.focusAIDesc },
    { icon: <Brain size={28} />, title: t.focusLLM, desc: t.focusLLMDesc },
    { icon: <Zap size={28} />, title: t.focusAutomation, desc: t.focusAutomationDesc },
  ];

  const roadmap = [
    { phase: t.phase1, desc: t.phase1Desc, status: 'done' },
    { phase: t.phase2, desc: t.phase2Desc, status: 'active' },
    { phase: t.phase3, desc: t.phase3Desc, status: 'next' },
    { phase: t.phase4, desc: t.phase4Desc, status: 'next' },
  ];

  const aiTools = [
    { name: 'Python', icon: '🐍' },
    { name: 'OpenAI API', icon: '🤖' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Pandas', icon: '🐼' },
  ];

  return (
    <div className="ai-page container">
      {/* Header */}
      <div className="ai-header">
        <div className="ai-header-icon">
          <Sparkles size={40} />
        </div>
        <h1 className="ai-title">{t.title}</h1>
        <p className="ai-subtitle">{t.subtitle}</p>
        <p className="ai-intro">{t.intro}</p>
      </div>

      {/* Current Focus */}
      <div className="ai-section">
        <h2 className="ai-section-title">
          <Target size={24} /> {t.focusTitle}
        </h2>
        <div className="focus-grid">
          {focusAreas.map((item, index) => (
            <div key={index} className="focus-card">
              <div className="focus-icon">{item.icon}</div>
              <h3 className="focus-title">{item.title}</h3>
              <p className="focus-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="ai-section">
        <h2 className="ai-section-title">
          <BookOpen size={24} /> {t.roadmapTitle}
        </h2>
        <div className="roadmap-container">
          {roadmap.map((item, index) => (
            <div key={index} className={`roadmap-item ${item.status}`}>
              <div className="roadmap-dot">
                {item.status === 'done' && '✓'}
                {item.status === 'active' && '●'}
              </div>
              <div className="roadmap-content">
                <h4 className="roadmap-phase">{item.phase}</h4>
                <p className="roadmap-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools */}
      <div className="ai-section">
        <h2 className="ai-section-title">
          <Cpu size={24} /> {t.toolsTitle}
        </h2>
        <div className="tools-grid">
          {aiTools.map((tool, index) => (
            <div key={index} className="tool-card">
              <span className="tool-icon">{tool.icon}</span>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Goal */}
      <div className="ai-goal">
        <div className="goal-icon">
          <Rocket size={32} />
        </div>
        <div className="goal-content">
          <h3 className="goal-title">{t.goalTitle}</h3>
          <p className="goal-desc">{t.goalDesc}</p>
          <div className="goal-status">
            <span className="status-label">{t.status}:</span>
            <span className="status-value">{t.statusValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;