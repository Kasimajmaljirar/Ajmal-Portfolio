import React, { useState } from 'react';

const Education = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (imgSrc, e) => {
    e.preventDefault();
    setSelectedImg(imgSrc);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
  };

  return (
    <>
      {selectedImg && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={closeLightbox}>
          <img src={selectedImg} alt="Certificate Full Size" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
          <button onClick={closeLightbox} style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '40px', background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
        </div>
      )}

      <section id="education" className="resume section fade-in">
        <div className="container section-title">
          <h2>Education</h2>
          <p>A summary of my academic background in the field of Computer Science and Data Analytics.</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-item">
                <h4>Master Of Computer Applications</h4>
                <h5>2023 - 2025</h5>
                <p><em>Hindusthan College of Engineering and Technology</em></p>
                <p>Focused on advanced software development, databases, and modern data-driven technologies.</p>
              </div>

              <div className="resume-item">
                <h4>Bachelor Of Computer Science</h4>
                <h5>2020 - 2023</h5>
                <p><em>Sadakathullah Appa College</em></p>
                <p>Built a strong foundation in programming, algorithms, and fundamental computer science principles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="resume section fade-in section-bg">
        <div className="container section-title">
          <h2>Certifications</h2>
          <p>A summary of my professional development and practical experience.</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-item">
                <h4>Data Analyst Intern</h4>
                <h5>Completed</h5>
                <p><em>Infotact Solutions</em></p>
                <p>Completed a 3-month Internship with hands-on experience in Data Analysis, utilizing various tools to clean and process datasets.</p>
                <div style={{ marginTop: '10px' }}>
                  <button onClick={(e) => openLightbox('/Ajmal_Jirar-Internship.jpg', e)} style={{ padding: '8px 16px', backgroundColor: '#173b6c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: '500' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View Certificate
                  </button>
                </div>
              </div>

              <div className="resume-item">
                <h4>NodeJs Intern</h4>
                <h5>Completed</h5>
                <p><em>Smackcoders Inc</em></p>
                <p>Completed a 3-month Internship with hands-on experience in Node.js.</p>
                <div style={{ marginTop: '10px' }}>
                  <button onClick={(e) => openLightbox('/Ajmal_Node.js_Intern_Certificate.jpg', e)} style={{ padding: '8px 16px', backgroundColor: '#173b6c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: '500' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View Certificate
                  </button>
                </div>
              </div>
               <div className="resume-item">
                <h4>Python Coder</h4>
                <h5>Completed</h5>
                <p><em>Kaggle</em></p>
                <p>Completed a Python Coder Certificate in Kaggle.</p>
                <div style={{ marginTop: '10px' }}>
                  <button onClick={(e) => openLightbox('/Python_Coder.png', e)} style={{ padding: '8px 16px', backgroundColor: '#173b6c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: '500' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
