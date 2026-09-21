// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AI from './pages/AI';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="App">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/skills" element={<Skills language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
          <Route path="/ai" element={<AI language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;