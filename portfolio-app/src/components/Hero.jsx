import React, { useState, useEffect } from 'react';

const Hero = () => {
  const words = ["Looking For Entry Level Data Analyst and Python Developer Opportunities"];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 50;
    const currentFullWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentWord === currentFullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentWord((prev) =>
          isDeleting
            ? currentFullWord.substring(0, prev.length - 1)
            : currentFullWord.substring(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-container fade-in">
        <h1>Kasim Ajmal Jirar K</h1>
        <p>I'm <span>{currentWord}</span><span style={{ borderRight: '2px solid #fff', paddingRight: '2px', animation: 'blink 0.7s infinite' }}></span></p>
      </div>
      <style>{`
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
