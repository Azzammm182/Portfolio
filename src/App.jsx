// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AI from './pages/AI';
import Contact from './pages/Contact';
import './App.css';

// Scroll ke atas setiap pindah halaman
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar language={language} setLanguage={setLanguage} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/skills" element={<Skills language={language} />} />
            <Route path="/projects" element={<Projects language={language} />} />
            <Route path="/ai" element={<AI language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
