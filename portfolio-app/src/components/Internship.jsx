import React from 'react';

const Internship = () => {
  return (
    <section id="internship" className="portfolio section fade-in">
      <div className="container section-title">
        <h2>Internship Experience</h2>
        <p>A summary of my professional internship experience and responsibilities.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-12">
            <div className="portfolio-item h-100" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0 30px rgba(27, 47, 69, 0.08)' }}>
              <div className="portfolio-content">
                <h4 style={{ color: '#173b6c', fontWeight: '700', fontSize: '24px' }}>Data Analyst Intern</h4>
                <h5 style={{ color: '#555', marginBottom: '15px', fontWeight: '600' }}>Infotact solutions <span style={{ fontWeight: 'normal', fontSize: '14px', float: 'right' }}> Mar 2026 - May 2026</span></h5>
                <ul className="description" style={{ textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px', color: '#444' }}>
                  <li style={{ marginBottom: '8px' }}>Collected, cleaned, and analyzed data using Excel, SQL, and Python.</li>
                  <li style={{ marginBottom: '8px' }}>Performed Exploratory Data Analysis (EDA) to identify trends, patterns, and business insights.</li>
                  <li style={{ marginBottom: '8px' }}>Used Pandas, NumPy, Matplotlib, and Seaborn for data manipulation and visualization</li>
                  <li style={{ marginBottom: '8px' }}>Wrote SQL queries to extract, filter, and analyze data from databases.</li>
                  <li style={{ marginBottom: '8px' }}>Automated data processing tasks to improve reporting efficiency.</li>
                  <li style={{ marginBottom: '8px' }}>Worked with large datasets to ensure data accuracy and consistency.</li>
                </ul>
                <div className="tech-stack" style={{ marginTop: '20px' }}>
                  <span className="badge">Microsoft Excel (Pivot Tables, VLOOKUP, XLOOKUP, Dashboards)</span>
                  <span className="badge">SQL</span>
                  <span className="badge">Python (Pandas, NumPy, Matplotlib, Seaborn)</span>
                  <span className="badge">Power BI</span>
                  <span className="badge">Data Cleaning & Data Visualization</span>
                  <span className="badge">Exploratory Data Analysis (EDA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12">
            <div className="portfolio-item h-100" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0 30px rgba(27, 47, 69, 0.08)' }}>
              <div className="portfolio-content">
                <h4 style={{ color: '#173b6c', fontWeight: '700', fontSize: '24px' }}>Node JS Intern</h4>
                <h5 style={{ color: '#555', marginBottom: '15px', fontWeight: '600' }}>SmackCoders Inc <span style={{ fontWeight: 'normal', fontSize: '14px', float: 'right' }}> June 2025 - Dec 2025</span></h5>
                <ul className="description" style={{ textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px', color: '#444' }}>
                  <li style={{ marginBottom: '8px' }}>Integrated third-party services such as Gmail API, Google Sheets API, and Zoho Projects API.</li>
                  <li style={{ marginBottom: '8px' }}>Built RESTful APIs for frontend-backend communication..</li>
                  <li style={{ marginBottom: '8px' }}>Implemented OAuth2 authentication and secure API authorization.</li>
                  <li style={{ marginBottom: '8px' }}>Developed 5+ modular backend services using Node.js & NestJS, integrating Gmail, Google Sheets, Zoho Projects via REST APIs & OAuth2.</li>
                  <li style={{ marginBottom: '8px' }}>Performed API testing using Postman and ensured reliable integration</li>
                  
                  {/* <li style={{ marginBottom: '8px' }}>Worked with large datasets to ensure data accuracy and consistency.</li> */}
                </ul>
                <div className="tech-stack" style={{ marginTop: '20px' }}>
                  <span className="badge">Node.js </span>
                  <span className="badge">NestJS</span>
                  <span className="badge">Express.js</span>
                  <span className="badge">REST APIs</span>
                  <span className="badge">OAuth2</span>
                  <span className="badge">Postman</span>
                  <span className="badge">API Integration</span>
                  <span className="badge">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
