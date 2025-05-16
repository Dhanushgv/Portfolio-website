// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import './Portfolio.css';

const Portfolio = () => {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [projects, setProjects] = useState([
    { title: 'Weather App', description: 'A React-based application that retrieves real-time weather data from OpenWeatherMap API.' },
    { title: 'Todo App', description: 'A minimalistic task manager that stores your todos using browser local storage.' }
  ]);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProjectTitle && newProjectDesc) {
      setProjects([...projects, { title: newProjectTitle, description: newProjectDesc }]);
      setNewProjectTitle('');
      setNewProjectDesc('');
    }
  };

  if (!submitted) {
    return (
      <div className="portfolio form-mode">
        <h2 className="form-heading">Enter Your Portfolio Details</h2>

        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
          <input type="text" placeholder="Your Role/Title" value={userRole} onChange={(e) => setUserRole(e.target.value)} required />
          <input type="email" placeholder="Your Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
          <input type="url" placeholder="LinkedIn URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required />
          <input type="url" placeholder="GitHub URL" value={github} onChange={(e) => setGithub(e.target.value)} required />
          <button type="submit">Generate Portfolio</button>
        </form>
      </div>
    );
  }

  return (
    <div className="portfolio-wrapper" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <div className="portfolio" style={{ position: 'relative', zIndex: 1 }}>
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <motion.header
          className="header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="header-text-background">
            <h1>{userName}</h1>
            <p className="subtitle">{userRole}</p>
          </div>
        </motion.header>

        <motion.section
          id="about"
          className="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a results-driven frontend developer with a strong passion for creating elegant, responsive, and accessible user interfaces. With experience in React, Tailwind CSS, and modern JavaScript, I transform ideas into polished web applications.
          </p>
        </motion.section>

        <motion.section
          id="projects"
          className="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Projects</h2>
          <form onSubmit={handleAddProject} className="form add-project-form">
            <input
              type="text"
              placeholder="Project Title"
              value={newProjectTitle}
              onChange={(e) => setNewProjectTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Project Description"
              value={newProjectDesc}
              onChange={(e) => setNewProjectDesc(e.target.value)}
              required
            />
            <button type="submit">Add Project</button>
          </form>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </motion.section>

        <motion.section
          id="contact"
          className="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact</h2>
          <p>Email: <a href={`mailto:${userEmail}`}>{userEmail}</a></p>
          <p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
          <p>GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
