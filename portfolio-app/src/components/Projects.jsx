import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="portfolio section section-bg fade-in">
      <div className="container section-title">
        <h2>Project Experience</h2>
        <p>A selection of projects demonstrating my expertise in data analytics, dashboard creation, and predictive modeling.</p>
      </div>

      <div className="container">
        <div className="row gy-4">

          <div className="col-12">
            <div className="portfolio-item h-100">
              <div className="portfolio-content">
                <h4>Omnichannel Retail Sales & Inventory Analytics</h4>
                <ul className="description" style={{ textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Developed an end-to-end retail analytics solution integrating online and offline sales transaction data.</li>
                  <li style={{ marginBottom: '8px' }}>Cleaned and preprocessed data by fixing timestamps and removing outliers.</li>
                  <li style={{ marginBottom: '8px' }}>Used SQL to analyze sales performance, inventory movement, revenue trends, and customer purchasing patterns.</li>
                  <li style={{ marginBottom: '8px' }}>Created interactive Power BI dashboards to monitor Total Sales, Average Revenue per Order, Product Category Performance, and City-wise Order Volume.</li>
                  <li style={{ marginBottom: '8px' }}>Performed time-series analysis to identify seasonal trends, peak sales hours, and high-demand periods.</li>
                  <li style={{ marginBottom: '8px' }}>Delivered actionable insights for inventory planning and marketing optimization through KPI-driven reporting.</li>
                </ul>
                <div className="tech-stack">
                   <span className="badge">Python</span>
                  <span className="badge">SQL</span>
                  <span className="badge">Power BI</span>
                   <span className="badge">MS Excel</span>
                  <span className="badge">Data Cleaning</span>
                  <span className="badge">Time-Series Analysis</span>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <a href="https://github.com/Kasimajmaljirar/1.Omnichannel-Retail-Sales-and-Inventory-Analytics-Dashboard" target="_blank" rel="noreferrer" style={{ color: '#173b6c', display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="portfolio-item h-100">
              <div className="portfolio-content">
                <h4>Travel, Tourism & Hospitality – Customer Retention</h4>
                <ul className="description" style={{ textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Analyzed historical hotel booking data to identify factors influencing customer cancellations and revenue performance.</li>
                  <li style={{ marginBottom: '8px' }}>Performed Exploratory Data Analysis (EDA) using Pandas, NumPy, Matplotlib, and Seaborn to uncover 
                                                      booking behavior patterns and seasonal demand trends.</li>
                  <li style={{ marginBottom: '8px' }}>Built customer segmentation models to classify travelers based on booking characteristics and  
    cancellation risk.</li>
                  <li style={{ marginBottom: '8px' }}>Conducted statistical analysis on Average Daily Rate (ADR), lead time, deposit type, and customer     
    segments to identify churn drivers</li>
                  <li style={{ marginBottom: '8px' }}>Developed predictive models using Logistic Regression to estimate booking cancellation probability</li>
                  <li style={{ marginBottom: '8px' }}>Created interactive dashboards visualizing seasonal pricing trends, booking volume, and cancellation 
    metrics to support revenue optimization decisions.</li>
                </ul>
                <div className="tech-stack">
                  <span className="badge">Python</span>
                  <span className="badge">Pandas</span>
                  <span className="badge">Matplotlib</span>
                  <span className="badge">MS Excel</span>
                  <span className="badge">Data Cleaning</span>
                  <span className="badge">Logistic Regression</span>
                  <span className="badge">EDA</span>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <a href="https://github.com/Kasimajmaljirar/Travel-Tourism-Hospitality-Customer-Retention" target="_blank" rel="noreferrer" style={{ color: '#173b6c', display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="portfolio-item h-100">
              <div className="portfolio-content">
                <h4>Nexus Market</h4>
                <ul className="description" style={{ textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Nexus Market is a modern, high-performance e-commerce web application designed to deliver a premium, seamless shopping experience. The platform combines a sleek, dynamic user interface with a robust, scalable backend architecture, allowing for efficient product management and secure transactions.</li>
                  <li style={{ marginBottom: '8px' }}>Built a highly responsive, modern UI utilizing a glassmorphism design system, smooth animations, and engaging gradient aesthetics to maximize user engagement and retention.</li>
                  <li style={{ marginBottom: '8px' }}>Developed a RESTful API backend to serve frontend requests, handle business logic, and manage secure data transactions seamlessly.</li>
                  <li style={{ marginBottom: '8px' }}>Implemented efficient state handling on the client side for seamless cart interactions, dynamic product grids, and instant user feedback without page reloads.</li>
                  {/* <li style={{ marginBottom: '8px' }}></li>
                  <li style={{ marginBottom: '8px' }}></li>
                  <li style={{ marginBottom: '8px' }}></li> */}
                  
                </ul>
                <div className="tech-stack">
                  
                  <span className="badge">Python</span>
                  <span className="badge">React (Vite)</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge"> Flask RESTful API</span>
                  <span className="badge">MySQL</span>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <a href="https://github.com/Kasimajmaljirar/Nexus-Market-" target="_blank" rel="noreferrer" style={{ color: '#173b6c', display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-12">
            <div className="portfolio-item h-100">
              <div className="portfolio-content">
                <h4>Project Title 4 (Placeholder)</h4>
                <ul className="description" style={{ textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Briefly describe your fourth project here.</li>
                  <li style={{ marginBottom: '8px' }}>Focus on the impact and the technologies you leveraged to achieve the results.</li>
                  <li style={{ marginBottom: '8px' }}>You can easily update this content later in this file.</li>
                </ul>
                <div className="tech-stack">
                  <span className="badge">Machine Learning</span>
                  <span className="badge">Pandas</span>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <a href="#" target="_blank" rel="noreferrer" style={{ color: '#173b6c', display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Projects;
