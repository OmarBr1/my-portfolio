import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="Resume">
      <div className="resume-container">
        <h2>Resume</h2>

        {/* Education Section */}
        <div className="resume-section">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>Bachelor's Degree in Computer Science</h4>
            <p>XYZ University, 2020 - 2024</p>
            <p>Focused on web development and programming fundamentals.</p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="resume-section">
          <h3>Work Experience</h3>
          <div className="resume-item">
            <h4>Front-End Developer (Freelance)</h4>
            <p>Upwork/Fiverr, 2024 - Present</p>
            <p>
              Designed and developed responsive websites for clients, ensuring optimal user experience
              and performance.
            </p>
          </div>
          <div className="resume-item">
            <h4>Intern Web Developer</h4>
            <p>ABC Company, June 2023 - September 2023</p>
            <p>
              Worked on modernizing the company website using React and Bootstrap, and collaborated with the team to deliver a seamless experience.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3>Skills</h3>

          {/* Progress Bars */}
          <div className="skills-progress">
  <div className="skill">
    <span>HTML</span>
    <div className="progress-bar">
      <div
        className="progress"
        style={{
          width: '90%',
          background: 'linear-gradient(90deg, #FFA500, #FF4500)' // Orange to reddish-orange
        }}
      ></div>
    </div>
  </div>
  <div className="skill">
    <span>CSS</span>
    <div className="progress-bar">
      <div
        className="progress"
        style={{
          width: '75%',
          background: 'linear-gradient(90deg, #007BFF, #00CFFF)' // Blue to light blue
        }}
      ></div>
    </div>
  </div>
  <div className="skill">
    <span>JavaScript</span>
    <div className="progress-bar">
      <div
        className="progress"
        style={{
          width: '85%',
          background: 'linear-gradient(90deg, #FFD700, #FFB14E)' // Gold to light orange
        }}
      ></div>
    </div>
  </div>
  <div className="skill">
    <span>React</span>
    <div className="progress-bar">
      <div
        className="progress"
        style={{
          width: '80%',
          background: 'linear-gradient(90deg, #00FFFF, #008B8B)' // Cyan to teal
        }}
      ></div>
    </div>
  </div>
</div>


            <br />
          {/* Other Skills */}
          <h3>Other Skills</h3>
          <ul className="skills-list">
            <li>Bootstrap</li>
            <li>MySQL, Node.js</li>
            <li>Python, Java, C++</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="resume-section">
          <h3>Projects</h3>
          <div className="resume-item">
            <h4>Portfolio Website</h4>
            <p>A personal portfolio website showcasing my projects and skills. Built with React.</p>
          </div>
          <div className="resume-item">
            <h4>E-commerce Platform</h4>
            <p>
              Developed a fully responsive shopping cart web app with React with Redux and Node.js, featuring user authentication and secure payment integration.
            </p>
          </div>
          <div className="resume-item">
            <h4>A Restaurant Menu</h4>
            <p>
              Developed a fully responsive restaurant menu web app with React and Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
