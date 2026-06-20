import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = () => {
    setLightboxImg('/profile_sidebar.jpg');
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={mobileNavActive ? 'mobile-nav-active' : ''}>
      {lightboxImg && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={closeLightbox}>
          <img src={lightboxImg} alt="Profile Full Size" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
          <button onClick={closeLightbox} style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
        </div>
      )}
      <button className="header-toggle" onClick={toggleMobileNav}>
        {mobileNavActive ? '✕' : '☰'}
      </button>

      <header id="header">
        <div className="profile-img" style={{ cursor: 'pointer', transition: 'transform 0.3s' }} onClick={openLightbox} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
          <img src="/profile_sidebar.jpg" alt="Profile" />
        </div>
        <a href="/" className="logo">
          <h1 className="sitename">Kasim Ajmal Jirar K</h1>
        </a>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/kasim-ajmal-jirar-a071852a0/" target="_blank" rel="noreferrer" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/Kasimajmaljirar" target="_blank" rel="noreferrer" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" onClick={toggleMobileNav}>Home</a></li>
            <li><a href="#about" onClick={toggleMobileNav}>About</a></li>
            <li><a href="#skills" onClick={toggleMobileNav}>Skills</a></li>
            <li><a href="#internship" onClick={toggleMobileNav}>Internship</a></li>
            <li><a href="#projects" onClick={toggleMobileNav}>Project Experience</a></li>
            <li><a href="#education" onClick={toggleMobileNav}>Education</a></li>
            <li><a href="#certifications" onClick={toggleMobileNav}>Certifications</a></li>
            <li><a href="#contact" onClick={toggleMobileNav}>Contact</a></li>
            <li>
              <a href="/resume.pdf" download style={{ marginTop: '15px', color: 'var(--accent)' }}>
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
