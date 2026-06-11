import React, { useState } from 'react';

const About = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const toggleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  return (
    <>
      {isLightboxOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={toggleLightbox}>
          <img src="/profile_about.jpg" alt="Profile Full Size" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
          <button onClick={toggleLightbox} style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
        </div>
      )}

      <section id="about" className="about section fade-in">
        <div className="container section-title">
          <h2>About</h2>
          <p>Entry-Level Data Analyst & Python Developer with hands-on experience in SQL, Python, Excel, and Power BI. Skilled in data cleaning, data validation, dashboard development, and business reporting.</p>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4" style={{ marginBottom: '20px' }}>
              <img 
                src="/profile_about.jpg" 
                className="img-fluid" 
                alt="Profile" 
                onClick={toggleLightbox}
                style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', display: 'block', margin: '0 auto', cursor: 'pointer', transition: 'transform 0.3s' }} 
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} 
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div className="col-lg-8 content">
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#173b6c', marginBottom: '15px' }}>Data Analyst & Python Developer</h2>
              <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
                "Seeking a Data Analyst or Python Developer role to support data-driven decision-making."
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}><strong style={{ color: '#050d18' }}>❯ Birthday:</strong> <span>24 January 2003</span></li>
                    <li style={{ marginBottom: '10px' }}><strong style={{ color: '#050d18' }}>❯ Phone:</strong> <span>+91 9894468965</span></li>
                    <li style={{ marginBottom: '10px' }}><strong style={{ color: '#050d18' }}>❯ City:</strong> <span>Chennai</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}><strong style={{ color: '#050d18' }}>❯ Age:</strong> <span>23</span></li>
                    <li style={{ marginBottom: '10px' }}><strong style={{ color: '#050d18' }}>❯ Degree:</strong> <span>Master of Computer Applications</span></li>
                    <li style={{ marginBottom: '10px' }}><strong style={{ color: '#050d18' }}>❯ Email:</strong> <span>kasimajmaljirar17@gmail.com</span></li>
                  </ul>
                </div>
              </div>
              <p style={{ marginTop: '20px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Experienced in transforming raw datasets into actionable insights through analytics projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
