import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id='About' className="about-section">
      <div className="about-paraghraph">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I'm <span className="highlight">Omar .Br</span>, a front-end developer passionate about turning ideas into clean,
          responsive, and user-friendly websites. I’m all about creating designs that not only look great but also work seamlessly for everyone. Whether it’s crafting sleek interfaces or solving tricky
          coding challenges, I enjoy every part of the process.
        </p>
        <p className="about-text">
          I’m focusing on freelancing, helping businesses and individuals bring their visions to life. I’m always learning and keeping up with the latest trends to ensure my work stays fresh and effective.
          Let’s work together to create something amazing!
        </p>
      </div>

      <div className="doing-container">
        <h3 className="doing-title">What I'm Doing</h3>
        <div className="doing-cards">
          <div className="card">
            <h4>Web Design</h4>
            <p>The most modern design and styles for websites</p>
          </div>
          <div className="card">
            <h4>Web Development</h4>
            <p>High-quality development for web apps and websites</p>
          </div>
        </div>
      </div>

      <div className="team-container">
        <h3 className="team-title">Meet the Team</h3>
        <div className="team-cards">
          <div className="card">
            <h4>Racim .Mg</h4>
            <p>Racim is a creative designer with a keen eye and stylish personality.</p>
          </div>
          <div className="card">
            <h4>Adil .Sf</h4>
            <p>Adil is a brilliant developer and capable programmer, with a passion and strong will.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
