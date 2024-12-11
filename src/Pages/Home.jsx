import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const Home = () => {
  return (
    <div id="home">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src="hero-img.png" alt="Hero Image" /> {/* Replace with your photo path */}
          </div>
          <div className="hero-text">
            <h1>Welcome to My Personal Website</h1>
            <p>Let's create something amazing together!</p>
            <Link to="/contact">
              <button className="cta-button">Contact Me</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
