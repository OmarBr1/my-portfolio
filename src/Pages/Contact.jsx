import React, { useState } from 'react';
import './Contact.css'; 


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
  <>
    <div id="Contact" className="contact-container">
      <div className="contact-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Us</h2>
          <div className="input-container">
            <input
              type="text"
              className="input-name"
              id="name"
              name="name"
              placeholder=''
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="input-label">Name</label>
          </div>
          <br />
          <div className="input-container">
            <input
              type="email"
              className="input-email"
              id="email"
              name="email"
              placeholder=''
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="input-label">Email</label>
          </div>
          <br />
          <div className="input-container">
            <textarea
              name="description"
              id="contact-description"
              className="input-description"
              placeholder='Your Project Idea:'
              cols="30"
              rows="10"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="description" className="input-label">Your Project Idea</label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>


    </div>
    <footer className="footer">
  <div className="footer-links">
    <a 
      href="https://github.com/OmarBr1/Todo-List.git" 
      target="_blank" 
      rel="noopener noreferrer"
      className="github"
    >
      <i className="fab fa-github"></i> {/* GitHub Icon */}
    </a>
    <a 
      href="mailto:rodeva.omar@outlook.com?subject=I want to hire you" 
      target="_blank" 
      rel="noopener noreferrer"
      className="email"
    >
      <i className="fas fa-envelope"></i> {/* Email Icon */}
    </a>
    <a 
      href="https://www.facebook.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="facebook"
    >
      <i className="fab fa-facebook"></i> {/* Facebook Icon */}
    </a>
    <a 
      href="https://www.linkedin.com/in/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="linkedin"
    >
      <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
    </a>
    <a 
      href="https://www.instagram.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="instagram"
    >
      <i className="fab fa-instagram"></i> {/* Instagram Icon */}
    </a>
  </div>
  <p>&copy; {new Date().getFullYear()} Rodeva. All rights reserved.</p>
</footer>
</>
  );
};

export default Contact;
