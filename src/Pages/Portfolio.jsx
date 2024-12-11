import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom';
const Portfolio = () => {
  return (
    <div id='Portfolio'>
      <div className='projects-cnt'>
        <h3>Portfolio</h3>
        <div className="row">
          <div className="project-card">
            <img src="cv-img.png" alt="Portfolio Page" />
            <div className="card-body">
              <h5 className='card-title'>Portfolio Page</h5>
              <p className="card-text">An example of a personnal Portfolio Page project to help showcase your feild experience.</p>
              <Link to="/comingSoon">
              <button className="cta-button">Look At Me!</button>
            </Link>
            </div>
          </div>

          <div className="project-card">
            <img src="https://picsum.photos/400/300" alt="Project name" />
            <div className="card-body">
              <h5 className='card-title'>E-Comerce Page</h5>
              <p className="card-text">An e-commerce page example, build it with React and Redux.</p>
              <Link to="/comingSoon">
              <button className="cta-button">Look At Me!</button>
            </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project-card">
            <img src="https://picsum.photos/400/300" alt="Project name" />
            <div className="card-body">
              <h5 className='card-title'>Restaurent Menu Page</h5>
              <p className="card-text">A basic restaurent menu page with modern styles.</p>
              <Link to="/comingSoon">
              <button className="cta-button">Look At Me!</button>
            </Link>            
            </div>
          </div>

          <div className="project-card">
            <img src="https://picsum.photos/400/300" alt="Project name" />
            <div className="card-body">
              <h5 className='card-title'>A Weather App Page</h5>
              <p className="card-text">A simple weather webapp by integrating an API.</p>
              <Link to="/comingSoon">
              <button className="cta-button">Look At Me!</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
