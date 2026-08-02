import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const words = ["Looking For Entry Level Data Analyst and Python Developer Opportunities"];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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
    <section id="hero" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#00b4d8" },
              links: {
                color: "#48cae4",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: { enable: true },
                value: 80,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
      )}
      <div className="hero-container fade-in" style={{ position: 'relative', zIndex: 2 }}>
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
