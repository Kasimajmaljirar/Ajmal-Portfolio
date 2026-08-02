import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills section section-bg fade-in">
      <div className="container section-title">
        <h2>Skills</h2>
        <p>A breakdown of my technical proficiencies in data analysis and development tools.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill"> HTML & CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">React<i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Python <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Node.js <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">MySQL <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">Pandas & NumPy <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Power BI Dashboards <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">MS Excel <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Data Cleaning & Validation <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
